const DocsIdPage = ({ params, searchParams }) => {
  console.log({ params, searchParams })
  return <div>docs id page {params.id.join(' / ')}</div>
}

export default DocsIdPage
