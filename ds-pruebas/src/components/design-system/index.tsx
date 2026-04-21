// @/components/design-system/index.tsx

import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** * Utility para combinación de clases Tailwind 
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}