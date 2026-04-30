import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  organization?: string
  message?: string
}

const ContactNotificationEmail = ({ name, email, organization, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New inquiry from {name ?? 'a visitor'}{organization ? ` (${organization})` : ''}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New inquiry from the website</Heading>
        <Section style={section}>
          <Text style={label}>Name</Text>
          <Text style={value}>{name ?? '—'}</Text>
          <Text style={label}>Email</Text>
          <Text style={value}>{email ?? '—'}</Text>
          <Text style={label}>Organization</Text>
          <Text style={value}>{organization ?? '—'}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={label}>Message</Text>
        <Text style={messageStyle}>{message ?? '—'}</Text>
        <Hr style={hr} />
        <Text style={footer}>Trustify Sports — contact form</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New inquiry — ${data?.name ?? 'Website'}${data?.organization ? ` (${data.organization})` : ''}`,
  displayName: 'Contact form notification (internal)',
  to: 'sander@trustifysports.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    organization: 'Example FC',
    message: 'We\'d love to learn more about your offering.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '560px' }
const h1 = { fontSize: '20px', fontWeight: 'bold', color: '#0a0a0a', margin: '0 0 16px' }
const section = { margin: '0 0 8px' }
const label = { fontSize: '11px', color: '#888', textTransform: 'uppercase' as const, letterSpacing: '0.5px', margin: '12px 0 2px' }
const value = { fontSize: '14px', color: '#111', margin: '0 0 4px' }
const messageStyle = { fontSize: '14px', color: '#222', lineHeight: '1.6', whiteSpace: 'pre-wrap' as const, margin: '0 0 12px' }
const hr = { borderColor: '#eaeaea', margin: '20px 0' }
const footer = { fontSize: '12px', color: '#999', margin: '12px 0 0' }
