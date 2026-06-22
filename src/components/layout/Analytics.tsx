/**
 * Analytics: GA4, Meta Pixel, Microsoft Clarity.
 * Set env vars in .env or Netlify:
 *   VITE_GA4_ID=G-XXXXXXXX
 *   VITE_META_PIXEL_ID=123456789
 *   VITE_CLARITY_ID=abcdefghij
 */
export function Analytics() {
  const ga4Id = import.meta.env.VITE_GA4_ID as string | undefined
  const metaPixelId = import.meta.env.VITE_META_PIXEL_ID as string | undefined
  const clarityId = import.meta.env.VITE_CLARITY_ID as string | undefined

  if (!ga4Id && !metaPixelId && !clarityId) return null

  const scripts: string[] = []

  if (ga4Id) {
    scripts.push(`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${ga4Id}');
    `)
  }

  if (metaPixelId) {
    scripts.push(`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${metaPixelId}');
      fbq('track', 'PageView');
    `)
  }

  if (clarityId) {
    scripts.push(`
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${clarityId}");
    `)
  }

  return (
    <>
      {ga4Id && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} />
        </>
      )}
      {metaPixelId && (
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      )}
      {scripts.length > 0 && (
        <script dangerouslySetInnerHTML={{ __html: scripts.join('\n') }} />
      )}
    </>
  )
}
