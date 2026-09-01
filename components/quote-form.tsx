'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle2, LockKeyhole } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const whatsappNumber = '5513997171493';

export function QuoteForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const details = [
      name && `Nome: ${name}`,
      phone && `Telefone: ${phone}`,
      email && `E-mail: ${email}`,
    ].filter(Boolean);
    const message = [
      'Olá! Quero receber meu projeto e orçamento gratuito de energia solar.',
      details.length ? '' : null,
      ...details,
    ].filter((line) => line !== null).join('\n');

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <aside className="quote-card" aria-labelledby="quote-title">
      <div className="quote-badge"><CheckCircle2 /> 100% gratuito</div>
      <h2 id="quote-title">Seu projeto solar começa aqui.</h2>
      <p>Preencha se quiser e receba atendimento personalizado pelo WhatsApp.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="quote-name">Nome <span>opcional</span></label>
        <Input id="quote-name" name="name" autoComplete="name" placeholder="Como podemos te chamar?" value={name} onChange={(event) => setName(event.target.value)} />
        <label htmlFor="quote-phone">Telefone <span>opcional</span></label>
        <Input id="quote-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(13) 99999-9999" value={phone} onChange={(event) => setPhone(event.target.value)} />
        <label htmlFor="quote-email">E-mail <span>opcional</span></label>
        <Input id="quote-email" name="email" type="email" autoComplete="email" placeholder="voce@email.com" value={email} onChange={(event) => setEmail(event.target.value)} />
        <Button type="submit" className="quote-submit">Quero meu projeto grátis <ArrowRight /></Button>
      </form>
      <small><LockKeyhole /> Seus dados serão enviados somente pelo WhatsApp.</small>
    </aside>
  );
}
