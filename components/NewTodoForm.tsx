'use client'

import { useState } from 'react'

const NewTodoForm = () => {
  console.log(window?.localStorage)
  const [state, updateState] = useState('')
  return (
    <div>
      <form>
        <input type="text"></input>
      </form>
    </div>
  )
}

export default NewTodoForm
