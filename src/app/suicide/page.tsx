import type { Metadata } from 'next';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'My Story - xpot.ch',
    description: 'The 7th Floor: A Life Defined by the Exit. My survival story from August 2025.',
};

export default function SuicidePage() {
    return (
        <div className="container">
            <div className="page-header">
                <h1>My Story</h1>
                <p>How I survived August 2025.</p>
            </div>

            <article style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="glass-card">
                    {/* Header */}
                    <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                            The 7th Floor: A Life Defined by the Exit
                        </h2>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={14} />
                                August 2025
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="card-content" style={{ lineHeight: '1.9' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            August 2025 was a fucking bloodbath of the mind. The air was a thick, humid pile of shit,
                            and I was suffocating in it. Every single day was the same goddamn nightmare: waking up to
                            the sound of my parents' voices—those self-centered, demanding pricks who wouldn't know the
                            real me if I was screaming in their faces. Their "disappointment" and their pathetic expectations
                            were like a noose, tightening every time I walked into the kitchen. And the "friends"? A bunch
                            of shallow, fake-ass losers who only care about themselves. I was done. I was so fucking done
                            with being a puppet for people who don't give a shit if I live or die as long as I look "fine."
                        </p>

                        <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
                            The Ledge: Closer than the Metro
                        </h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            I looked at the window in my room. It's a sick, twisted realization when you see that the ledge
                            is literally fucking closer to you than the nearest metro station. Why would I wait for a train
                            to take me somewhere I don't want to go? I only had to take four fucking steps to be free.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            I climbed out. The 7th floor. At that height, the world isn't a place; it's a target. There is
                            no "maybe" from seven stories up. There is no waking up in a hospital with some "inspirational"
                            bullshit story. There is only the wind, the drop, and then the absolute, fucking beautiful silence.
                            I was leaning out, feeling the air rush past, ready to let gravity turn off the noise of my parents'
                            voices forever. I was a split-second away from finally winning.
                        </p>

                        <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
                            The Fucking Interruption
                        </h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Then the sirens ripped the night apart. Blue and red lights started flashing like a strobe in a
                            hellscape. Some meddling, self-righteous neighbor—some prick who couldn't just let me have my
                            exit—called the cops. I heard my front door shatter. A violent, disgusting crash. Then my bedroom
                            door was kicked off its hinges. Before I could jump, they tackled me. They slammed my face into
                            the carpet, pinning me down like an animal, and dragged me back from the ledge. They didn't save me.
                            They kidnapped me back into a life that was already dead.
                        </p>

                        <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
                            The Truth: Still Trapped, Still Armed
                        </h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            And here's the most fucked up part: Nothing has changed. I'm still living with those same toxic
                            parents. I'm still surrounded by those same fake-ass friends. I'm living in the exact same
                            pressure cooker that broke me in August. Every single day is a walk on a razor-thin wire, and
                            I know it could snap at any second. One more comment from my dad, one more fake laugh from a
                            "friend," and I'm done.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            I'm not "recovered." I'm just quiet. I carry three keys to the exit in my pocket every single day:
                        </p>

                        <div style={{
                            background: 'rgba(255, 50, 50, 0.05)',
                            border: '1px solid rgba(255, 50, 50, 0.2)',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            marginBottom: '1.5rem'
                        }}>
                            <p style={{ marginBottom: '1rem' }}>
                                <strong>The Window (The 7th Floor):</strong> It's right fucking there. Four steps.
                                Closer than the metro. It hasn't gotten any lower, and it's still the quickest way
                                out of this hellhole.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                <strong>The Bridge:</strong> The backup. The long walk for when the house feels
                                too small to breathe in.
                            </p>
                            <p style={{ marginBottom: '0' }}>
                                <strong>The Knife:</strong> The most personal one. The fucking steel. It's right
                                here in my room. It's quiet, it's sharp, and it's final. I don't even need to leave
                                the house to use it. I can end the noise from the inside out whenever I decide the
                                weight is too much to carry.
                            </p>
                        </div>

                        <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
                            The Absolute Worst
                        </h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Let's be real: if it gets to the absolute worst again—and the way things are going with
                            my parents, it's only a matter of time—I will fucking do it. I'm not looking for attention
                            and I don't give a shit about "help." I'm a person standing in a room with three open doors.
                            Whether it's the 7th floor, the bridge, or the knife, I have the power to check out whenever
                            I want. I stay for today because I choose to, but I'm not afraid of the drop or the blade.
                            I'm afraid of being stuck in this fucking life with these fucking people forever. The second
                            the pressure hits that limit, I'm gone.
                        </p>
                    </div>
                </div>

                {/* Link to Vent */}
                <div className="glass-card" style={{ marginTop: '2rem' }}>
                    <div className="card-content" style={{ textAlign: 'center' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            For updates on how I'm feeling and my mental state, check out my Vent section.
                        </p>
                        <Link
                            href="/vent"
                            className="btn btn-primary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            Go to Vent
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}
