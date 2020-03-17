import React from "react"
import { render, wait } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import App from "./App"
import { fetchData as mockFetchData } from "./api/fetchData"
import { mockData as data } from "./mockData"
import { act } from "react-dom/test-utils"
jest.mock("./api/fetchData")

test('renders the app ', () => {
    act(() => {

        mockFetchData.mockResolvedValueOnce(data)


    })

})

test('if click events works to generate episodes', async () => {

    mockFetchData.mockResolvedValueOnce(data)

    const { getByText } = render(<App />)
    await wait(() => { getByText(/Select a season/i) })
    const dropDown = getByText(/Select a season/i)

    userEvent.click(dropDown)

    getByText(/Season 1/i)
    const seasonOne = getByText(/Season 1/i)

    userEvent.click(seasonOne)

    getByText(/Episode 1/i)
})