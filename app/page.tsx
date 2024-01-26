const getData = async () => {
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000))
  return { data: [1, 2, 3] }
}

export default async function Home() {
  const data = await getData()
  console.log({ data })
  return (
    <div>
      {data.data.map((el) => (
        <p key={el}>{el}</p>
      ))}
    </div>
  )
}
