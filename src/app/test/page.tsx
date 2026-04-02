'use client'

import { useState, useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import QuestionCard from '@/components/QuestionCard'
import ChapterTransition from '@/components/ChapterTransition'
import questionsData from '@/content/questions.json'
import { QuestionsData, QuestionOption } from '@/types'

const data = questionsData as unknown as QuestionsData

// Flatten all questions
const allQuestions = data.chapters.flatMap(ch => ch.questions)
const totalQuestions = allQuestions.length

export default function TestPage() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<QuestionOption[]>([])
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showChapter, setShowChapter] = useState<number | null>(data.chapters[0]?.id ?? null)

  const currentQuestion = allQuestions[currentIndex]
  const progress = currentIndex / totalQuestions

  // Track which chapter indices start at
  const chapterStartIndices = useMemo(() => {
    const indices: Record<number, number> = {}
    let idx = 0
    for (const ch of data.chapters) {
      indices[ch.id] = idx
      idx += ch.questions.length
    }
    return indices
  }, [])

  const handleAnswer = useCallback((option: QuestionOption) => {
    setSelectedOption(option.id)
    const newAnswers = [...answers, option]
    setAnswers(newAnswers)

    // Auto-advance after brief delay
    setTimeout(() => {
      const nextIndex = currentIndex + 1

      if (nextIndex >= totalQuestions) {
        // Test complete - store results and navigate
        sessionStorage.setItem('sonar_answers', JSON.stringify(newAnswers))
        router.push('/results')
        return
      }

      // Check if entering new chapter
      const nextQuestion = allQuestions[nextIndex]
      const currentChapter = currentQuestion.chapter
      if (nextQuestion.chapter !== currentChapter) {
        setShowChapter(nextQuestion.chapter)
      }

      setCurrentIndex(nextIndex)
      setSelectedOption(null)
    }, 600)
  }, [currentIndex, answers, currentQuestion, router])

  const handleChapterComplete = useCallback(() => {
    setShowChapter(null)
  }, [])

  return (
    <main className="min-h-screen flex flex-col">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-40 h-[2px] bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-accent/60 to-accent"
          style={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          layout
        />
        {/* Glow dot at end */}
        <motion.div
          className="absolute top-0 h-[2px] w-8 bg-accent blur-sm"
          style={{ left: `${progress * 100}%` }}
          transition={{ duration: 0.5 }}
          layout
        />
      </div>

      {/* Chapter transition overlay */}
      <AnimatePresence>
        {showChapter !== null && (
          <ChapterTransition
            chapter={data.chapters.find(ch => ch.id === showChapter)!}
            onComplete={handleChapterComplete}
          />
        )}
      </AnimatePresence>

      {/* Question area */}
      <div className="flex-1 flex items-center justify-center py-16">
        {!showChapter && currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            questionIndex={currentIndex}
            totalQuestions={totalQuestions}
            onAnswer={handleAnswer}
            selectedOption={selectedOption}
          />
        )}
      </div>
    </main>
  )
}
