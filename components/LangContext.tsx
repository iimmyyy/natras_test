'use client'

import { strings } from '@/lib/i18n'

// Single-language site. This hook is kept so existing components can read copy
// via `const { t } = useLang()` without further changes.
export function useLang() {
  return { t: strings }
}
