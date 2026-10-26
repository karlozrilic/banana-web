import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const base = 'https://banana.zrilich.com'

export default function sitemap(): MetadataRoute.Sitemap {
	return ['', '/privacy-policy', '/terms-of-service'].map((path) => ({
		url: `${base}${path}`,
	}))
}
