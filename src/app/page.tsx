import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/slides/0');
  return null;
}
