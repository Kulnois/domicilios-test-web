import React from 'react'
import { screen, render } from '@testing-library/react'

import Sidebar from './Sidebar'

beforeEach(() => render(<Sidebar />))

describe("Sidebar", () => {
    it("must display a title", () => {
        expect(screen.queryByText(/domicilios test/i)).toBeInTheDocument()
    });

    it("must display a log in", () => {
        expect(screen.queryByText(/iniciar sesión/i)).toBeInTheDocument()
    });

    it("must display a Logout", () => {
        expect(screen.queryByText(/cerrar sesión/i)).toBeInTheDocument()
    });
});



