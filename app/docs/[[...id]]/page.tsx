const DocsIdPage = ({ params }) => {
  console.log({ params })
  return <div>docs id page {params.id.join(' / ')}</div>
}

export default DocsIdPage
