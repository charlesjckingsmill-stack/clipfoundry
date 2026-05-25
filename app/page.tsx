"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Clapperboard, Clock, Repeat, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const packages = [
    {
      name: "Trial Pack",
      price: "£99",
      description: "A low-risk first batch so you can see what your content could become.",
      features: [
        "5 edited short-form clips",
        "Captions/subtitles included",
        "5 hooks and titles",
        "5 post captions",
        "Delivered in 3–5 days",
        "No long-term commitment",
      ],
    },
    {
      name: "Monthly Pack",
      price: "£399/month",
      description: "For businesses and creators who want consistent content every month.",
      features: [
        "20 short-form clips per month",
        "Captions/subtitles included",
        "Hooks and titles for every clip",
        "Post captions included",
        "1 revision round per batch",
        "Ideal for weekly posting",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                <Clapperboard className="h-5 w-5" />
              </div>
              <span className="text-xl font-semibold">ClipFoundry</span>
            </div>
            <a
              href="mailto:charlesjckingsmill@gmail.com?subject=ClipFoundry%20Trial%20Pack&body=Hi%2C%20I%27m%20interested%20in%20the%20%C2%A399%20trial%20pack.%20I%20have%20a%20video%20I%27d%20like%20turned%20into%20short-form%20clips."
              className="hidden text-sm text-slate-300 hover:text-white sm:block"
            >
              charlesjckingsmill@gmail.com
            </a>
          </nav>

          <div className="grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                AI-assisted short-form content for businesses and creators
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Turn long videos into clips people actually watch.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                ClipFoundry turns podcasts, interviews, webinars and talking-head videos into TikToks,
                Reels, Shorts and LinkedIn clips — complete with captions, hooks, titles and post captions.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="mailto:charlesjckingsmill@gmail.com?subject=ClipFoundry%20Trial%20Pack&body=Hi%2C%20I%27m%20interested%20in%20the%20%C2%A399%20trial%20pack.%20I%20have%20a%20video%20I%27d%20like%20turned%20into%20short-form%20clips.">
                  <Button className="rounded-2xl bg-cyan-400 px-6 py-6 text-base font-semibold text-slate-950 hover:bg-cyan-300">
                    Get 5 clips for £99 <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="#how-it-works">
                  <Button
                    variant="outline"
                    className="rounded-2xl border-white/15 bg-white/5 px-6 py-6 text-base text-white hover:bg-white/10"
                  >
                    See how it works
                  </Button>
                </a>
              </div>

              <p className="mt-4 text-sm text-slate-400">
                Trial Pack: 5 edited clips delivered in 3–5 days. No long-term commitment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/10 text-white shadow-2xl">
                <CardContent className="p-6 sm:p-8">
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950 p-5 sm:p-6">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-slate-400">ClipFoundry workflow</p>
                        <h3 className="mt-1 text-2xl font-semibold">One video becomes a week of content</h3>
                      </div>
                      <div className="shrink-0 rounded-full bg-cyan-400 px-3 py-1 text-sm font-bold text-slate-950">
                        3–5 days
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-xs font-bold tracking-widest text-slate-400">SOURCE VIDEO</span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">42:18 podcast</span>
                      </div>

                      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-700 via-slate-900 to-black">
                        <div className="aspect-video p-4">
                          <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                            Interview recording
                          </div>

                          <div className="absolute inset-x-5 bottom-5">
                            <div className="mb-3 rounded-lg bg-black/70 px-3 py-2 text-sm font-semibold">
                              “The biggest mistake most businesses make with content...”
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-white/20">
                              <div className="h-full w-2/3 rounded-full bg-cyan-400" />
                            </div>
                            <div className="mt-2 flex justify-between text-xs text-slate-300">
                              <span>00:00</span>
                              <span>42:18</span>
                            </div>
                          </div>

                          <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cyan-400 text-xl font-bold text-slate-950 shadow-xl">
                            ▶
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="my-5 flex justify-center">
                      <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-200">
                        ↓ Turned into short-form clips
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { platform: "Reel", hook: "Stop posting like this", time: "0:31" },
                        { platform: "TikTok", hook: "This is why clips fail", time: "0:24" },
                        { platform: "Short", hook: "One simple content fix", time: "0:28" },
                      ].map((clip) => (
                        <div key={clip.hook} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                          <div className="relative aspect-[9/16] bg-gradient-to-b from-slate-700 via-slate-900 to-black p-3">
                            <div className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-1 text-[10px] text-white">
                              {clip.time}
                            </div>

                            <div className="absolute left-2 top-2 rounded-full bg-cyan-400 px-2 py-1 text-[10px] font-bold text-slate-950">
                              {clip.platform}
                            </div>

                            <div className="absolute left-2 right-2 top-16 rounded-lg bg-black/65 px-2 py-2 text-center text-[11px] font-bold leading-tight text-white">
                              {clip.hook}
                            </div>

                            <div className="absolute bottom-12 left-2 right-2 rounded-lg bg-white px-2 py-1 text-center text-[10px] font-bold leading-tight text-slate-950">
                              Captions added here
                            </div>

                            <div className="absolute bottom-3 left-2 right-2">
                              <div className="h-1.5 overflow-hidden rounded-full bg-white/20">
                                <div className="h-full w-1/2 rounded-full bg-cyan-400" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
                      <div className="rounded-xl bg-white/5 px-3 py-2">✓ Edited clips</div>
                      <div className="rounded-xl bg-white/5 px-3 py-2">✓ Captions/subtitles</div>
                      <div className="rounded-xl bg-white/5 px-3 py-2">✓ Hooks & titles</div>
                      <div className="rounded-xl bg-white/5 px-3 py-2">✓ Post captions</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Most businesses already have the content. They just don’t have the clips.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Long videos are hard to repurpose consistently. ClipFoundry turns them into short-form content
            that is easier to post, easier to watch and easier to share.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["TikTok clips", "Instagram Reels", "YouTube Shorts", "LinkedIn videos"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Check className="mb-4 h-5 w-5 text-cyan-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple packages. Clear output.
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {packages.map((pack) => (
              <Card key={pack.name} className="rounded-[2rem] border-white/10 bg-white/5 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold">{pack.name}</h3>
                  <div className="mt-3 text-4xl font-bold">{pack.price}</div>
                  <p className="mt-4 text-slate-300">{pack.description}</p>

                  <div className="mt-6 space-y-3">
                    {pack.features.map((feature) => (
                      <div key={feature} className="flex gap-3 text-slate-200">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a href="mailto:charlesjckingsmill@gmail.com?subject=ClipFoundry%20Trial%20Pack&body=Hi%2C%20I%27m%20interested%20in%20the%20%C2%A399%20trial%20pack.%20I%20have%20a%20video%20I%27d%20like%20turned%20into%20short-form%20clips.">
                    <Button className="mt-8 w-full rounded-2xl bg-white px-6 py-6 text-base font-semibold text-slate-950 hover:bg-neutral-200">
                      Start with this
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card className="rounded-[2rem] border-white/10 bg-white/5 text-white">
              <CardContent className="p-7">
                <Video className="mb-5 h-8 w-8 text-cyan-300" />
                <h3 className="text-xl font-semibold">Send one long video</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  Send a podcast, interview, webinar, talking-head clip or any long-form video you already have.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-white/10 bg-white/5 text-white">
              <CardContent className="p-7">
                <Clapperboard className="mb-5 h-8 w-8 text-cyan-300" />
                <h3 className="text-xl font-semibold">We find the best moments</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  We pull out the strongest clips, shape them for short-form platforms and add captions and hooks.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-white/10 bg-white/5 text-white">
              <CardContent className="p-7">
                <Repeat className="mb-5 h-8 w-8 text-cyan-300" />
                <h3 className="text-xl font-semibold">You get ready-to-post clips</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  You receive a batch of clips with post captions ready for TikTok, Reels, Shorts and LinkedIn.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Built for people who need more content, not more editing.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                ClipFoundry is for businesses and creators who already have useful video but struggle to turn it into consistent short-form posts.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Gyms & personal trainers",
                "Estate agents",
                "Podcasts & interview shows",
                "Coaches & consultants",
                "Restaurants & bars",
                "Recruiters",
                "Sports clubs & coaches",
                "Creators & founders",
              ].map((audience) => (
                <div key={audience} className="rounded-2xl bg-slate-950 px-5 py-4 text-slate-100">
                  {audience}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Questions people usually ask
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Simple answers before you send over your first video.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {[
              {
                question: "What type of videos can I send?",
                answer: "Podcasts, interviews, webinars, talking-head videos, training clips, property tours, Q&As or any longer video with useful moments inside it.",
              },
              {
                question: "How long does delivery take?",
                answer: "The Trial Pack is normally delivered within 3–5 days after you send the video and any basic brand notes.",
              },
              {
                question: "Do you add captions?",
                answer: "Yes. Every clip includes captions/subtitles, plus a hook/title and a written post caption.",
              },
              {
                question: "Can I request changes?",
                answer: "The monthly package includes one revision round per batch. For the trial, small fixes are included so the clips are ready to post.",
              },
            ].map((item) => (
              <div key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <Clock className="mx-auto mb-5 h-10 w-10 text-cyan-300" />
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Get your first 5 clips this week.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Send one long video and get a ready-to-post batch of short-form clips with captions, hooks and post captions.
          </p>

          <a href="mailto:charlesjckingsmill@gmail.com?subject=ClipFoundry%20Trial%20Pack&body=Hi%2C%20I%27m%20interested%20in%20the%20%C2%A399%20trial%20pack.%20I%20have%20a%20video%20I%27d%20like%20turned%20into%20short-form%20clips.">
            <Button className="mt-8 rounded-2xl bg-cyan-400 px-8 py-6 text-base font-semibold text-slate-950 hover:bg-cyan-300">
              Book the £99 trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-400 sm:flex-row">
          <div>© 2026 ClipFoundry. Short-form content from long-form video.</div>
          <div>charlesjckingsmill@gmail.com</div>
        </div>
      </footer>
    </main>
  );
}
