
export const Note = ({ notes = [], showAll }) => {
  return (
    < div >
      {
        notes
          .filter(notes => showAll === true ? true : notes.important === true )
          .map(el => <li key={el.id}>{el.content}</li>)
      }
    </div >
  )
}