import React from 'react'
import { screen, render } from '@testing-library/react'

import Navbar from './Navbar'

beforeEach(() => render(<Navbar />))

describe("Navbar", () => {
    it("must display a title", () => {
        expect(screen.queryByText(/domicilios test/i)).toBeInTheDocument()
    });

    it("must display a log in", () => {
        expect(screen.queryByText(/iniciar sesión/i)).toBeInTheDocument()
    });

    it("must display a name user", () => {
        expect(screen.queryByText(/hola, juan/i)).toBeInTheDocument()
    });
});



