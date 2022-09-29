import fs = require('fs/promises')
import path = require('path')
const notesPath = path.join(__dirname, './notes.json')

export type TFormattedData = {
  id: string
  name: string
  created: string
  content: string
  category: string
  archived: boolean
  dates: string
}

export type TSummary = {
  id: string
  category: string
  active: number
  archived: number
}

export type TData = {
  id: string
  name: string
  created: string
  content: string
  category: string
  archived: boolean
}

const sumNotes = (arrInit: TData[]): TSummary[] | [] => {
  const arrRes = arrInit.reduce((acc, elem) => {
    const isInArr = acc.find((item) => item.category === elem.category)
    let newItem

    if (isInArr) {
      if (elem.archived) {
        isInArr.archived += 1
      } else {
        isInArr.active += 1
      }
      return acc
    }
    newItem = {
      id: elem.category,
      category: elem.category,
      active: +!elem.archived,
      archived: +elem.archived,
    }
    return [...acc, newItem]
  }, [] as TSummary[] | [])
  return arrRes
}

const reportStats = async () => {
  try {
    const data = await fs.readFile(notesPath)
    const notesList = JSON.parse(data.toString('utf8'))

    return sumNotes(notesList)
  } catch (error) {
    console.error()
  }
}

module.exports = {
  reportStats,
}
