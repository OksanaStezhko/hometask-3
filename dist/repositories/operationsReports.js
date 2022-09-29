var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
import { promises as fs } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const notesPath = join(__dirname, './notes.json')
const sumNotes = (arrInit) => {
  const arrRes = arrInit.reduce((acc, elem) => {
    const isInArr = acc.find((item) => item.category === elem.category)
    if (isInArr) {
      if (elem.archived) {
        isInArr.archived += 1
      } else {
        isInArr.active += 1
      }
      return acc
    }
    const newItem = {
      id: elem.category,
      category: elem.category,
      active: +!elem.archived,
      archived: +elem.archived,
    }
    return [...acc, newItem]
  }, [])
  return arrRes
}
const reportStats = (type) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const data = yield fs.readFile(notesPath)
      const notesList = JSON.parse(data.toString('utf8'))
      return sumNotes(notesList)
    } catch (error) {
      console.error()
    }
  })
export default {
  reportStats,
}
