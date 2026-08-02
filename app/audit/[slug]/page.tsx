import { redirect } from 'next/navigation'

export default async function AuditRedirect({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  redirect(`https://crm.nava45.com/audit/${encodeURIComponent(slug)}`)
}
