import React from 'react'
import { screen, render } from '@testing-library/react'

import Message from './Message'

beforeEach(() => render(<Message />))

describe("Message", () => {
    it("must display a alert", () => {
        expect(screen.queryByText(/this is an alert box/i)).toBeInTheDocument()
    });
});