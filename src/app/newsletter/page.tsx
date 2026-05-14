import type { Metadata } from 'next'
import Link from 'next/link'
import './embed.css'

export const metadata: Metadata = {
  title: 'Newsletter — EE Isherwood',
  description: 'Get free book announcements, updates, and exclusive content from NYT bestselling author EE Isherwood.',
}

export default function NewsletterPage() {
  return (
    <div className="min-h-screen font-sans antialiased bg-background text-foreground">
      {/* Main Content */}
      <section className="px-6 py-16 md:py-24 max-w-md mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ background: 'linear-gradient(135deg, #fef3c7, #fde68a)', border: '1px solid #f59e0b', color: '#92400e' }}>
          📚 Free Books
        </span>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Newsletter</h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Thank you for signing up to my newsletter. I send out once or twice a month and never spam you. Cancel anytime.
        </p>

        <div id="mlb2-1385242" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-1385242">
          <div className="ml-form-align-center">
            <div className="ml-form-embedWrapper embedForm">
              <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                <div className="ml-form-embedContent" style={{ textAlign: 'left' }}>
                  <h4 style={{ color: '#000', fontFamily: "'Open Sans',Arial,Helvetica,sans-serif", fontSize: '30px', fontWeight: 400, margin: '0 0 10px 0' }}>Newsletter</h4>
                  <p style={{ color: '#000', fontFamily: "'Open Sans',Arial,Helvetica,sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: '20px', margin: '0 0 10px 0' }}>Stay up to date as my new books are released.</p>
                </div>
                <form className="ml-block-form" action="https://static.mailerlite.com/webforms/submit/l9m1f6" data-code="l9m1f6" method="post">
                  <div className="ml-form-formContent">
                    <div className="ml-form-fieldRow ml-last-item">
                      <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                        <input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autoComplete="email" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px', fontFamily: "'Open Sans',Arial,Helvetica,sans-serif", boxSizing: 'border-box' }} />
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="ml-submit" value="1" />
                  <div className="ml-form-embedSubmit">
                    <button type="submit" className="primary" style={{ width: '100%', padding: '10px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: "'Open Sans',Arial,Helvetica,sans-serif" }}>Subscribe</button>
                  </div>
                  <input type="hidden" name="anticsrf" value="true" />
                </form>
              </div>
              <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
                <div className="ml-form-successContent">
                  <h4>Thank you!</h4>
                  <p>You have successfully joined our subscriber list.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/free-books" className="text-blue-600 font-semibold hover:underline">
            ← Back to Free Books
          </Link>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: `
        function ml_webform_success_1385242(){try{window.top.location.href="https://www.eeisherwood.com/thanks/"}catch(o){window.location.href="https://www.eeisherwood.com/thanks/"}}
      ` }} />
    </div>
  )
}