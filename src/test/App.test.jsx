import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
    it('renders the main title', () => {
        render(<App />)
        expect(screen.getByText(/CI\/CD Pipeline Demo/i)).toBeInTheDocument()
    })

    it('renders the pipeline status badge', () => {
        render(<App />)
        expect(screen.getByText(/Deployed Successfully/i)).toBeInTheDocument()
    })

    it('renders the tech stack list', () => {
        render(<App />)
        expect(screen.getByText(/Tech Stack/i)).toBeInTheDocument()
        expect(screen.getByText(/Modern CSS/i)).toBeInTheDocument()
    })

    it('increments deploy counter when button is clicked', () => {
        render(<App />)
        const button = screen.getByText(/Simulate Deploy/i)
        const counter = screen.getByText('0')

        fireEvent.click(button)
        expect(screen.getByText('1')).toBeInTheDocument()

        fireEvent.click(button)
        expect(screen.getByText('2')).toBeInTheDocument()
    })

    it('renders the repository link', () => {
        render(<App />)
        const link = screen.getByRole('link', { name: /KTanuj62\/ci-cd-react-app/i })
        expect(link).toHaveAttribute('href', 'https://github.com/KTanuj62/ci-cd-react-app')
    })
})
