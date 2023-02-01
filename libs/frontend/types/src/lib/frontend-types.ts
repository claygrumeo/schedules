export function frontendTypes(): string {
  return 'frontend-types';
}

export interface Bookable {
  id: string,
  name: string,
  description: string,
  imgSrc: string,
  duration: number
}
