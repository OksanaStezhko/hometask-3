const fs = require('fs').promises
const path = require('path')
const notesPath = path.join(__dirname, './notes.json')

// const sumNotes = (arrInit: TData[]): TSummary[] | [] => {
//   const arrRes = arrInit.reduce((acc, elem) => {
//     const isInArr = acc.find((item) => item.category === elem.category)
//     let newItem

//     if (isInArr) {
//       if (elem.archived) {
//         isInArr.archived += 1
//       } else {
//         isInArr.active += 1
//       }
//       return acc
//     }
//     newItem = {
//       id: elem.category,
//       category: elem.category,
//       active: +!elem.archived,
//       archived: +elem.archived,
//       image: categoryImages[elem.category],
//     }
//     return [...acc, newItem]
//   }, [] as TSummary[] | [])
//   return arrRes
// }

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

const reportStats = async (type) => {
  try {
    const data = await fs.readFile(notesPath)
    const notesList = JSON.parse(data)
    return sumNotes(notesList)
  } catch (error) {
    console.error()
  }
}

module.exports = {
  reportStats,
}
