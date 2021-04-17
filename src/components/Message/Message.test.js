import React from 'react'
import { screen, render } from '@testing-library/react'

import PostStatus from './PostStatus'

beforeEach(() => render(<PostStatus />))

describe("PostStatus", () => {
    it("must display a publicate", () => {
        expect(screen.queryByText(/publicar/i)).toBeInTheDocument()
    });
});