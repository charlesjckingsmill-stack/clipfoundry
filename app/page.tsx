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
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 text-neutral-950">
                <Clapperboard className="h-5 w-5" />
              </div>
              <span className="text-xl font-semibold">ClipFoundry</span>
            </div>
            <a
              href="mailto:charlesjckingsmill@gmail.com"
              className="hidden text-sm text-neutral-300 hover:text-white sm:block"
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
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200">
                AI-assisted short-form content for businesses and creators
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Turn long videos into clips people actually watch.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
                ClipFoundry turns podcasts, interviews, webinars and talking-head videos into TikToks,
                Reels, Shorts and LinkedIn clips — complete with captions, hooks, titles and post captions.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="mailto:charlesjckingsmill@gmail.com?subject=ClipFoundry%20Trial%20Pack">
                  <Button className="rounded-2xl bg-orange-500 px-6 py-6 text-base font-semibold text-neutral-950 hover:bg-orange-400">
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

              <p className="mt-4 text-sm text-neutral-400">
                Trial Pack: 5 edited clips delivered in 3–5 days. No long-term commitment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/10 text-white shadow-2xl">
                <CardContent className="p-6">
                  <div className="rounded-[1.5rem] bg-neutral-950 p-4">
                    <div className="aspect-[9/16] rounded-[1.25rem] border border-white/10 bg-gradient-to-b from-neutral-800 to-neutral-950 p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="h-3 w-20 rounded-full bg-white/20" />
                        <div className="h-3 w-8 rounded-full bg-orange-500" />
                      </div>

                      <div className="mt-24 space-y-4">
                        <div className="inline-block rounded-xl bg-orange-500 px-3 py-2 text-sm font-bold text-neutral-950">
                          “This one mistake kills your content...”
                        </div>
                        <div className="h-3 w-4/5 rounded-full bg-white/25" />
                        <div className="h-3 w-3/5 rounded-full bg-white/20" />
                      </div>

                      <div className="mt-32 rounded-2xl bg-white/10 p-4 text-sm text-neutral-200">
                        Captions, hook, title and post caption included.
                      </div>
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
          <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-300">
            Long videos are hard to repurpose consistently. ClipFoundry turns them into short-form content
            that is easier to post, easier to watch and easier to share.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["TikTok clips", "Instagram Reels", "YouTube Shorts", "LinkedIn videos"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Check className="mb-4 h-5 w-5 text-orange-400" />
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
                  <p className="mt-4 text-neutral-300">{pack.description}</p>

                  <div className="mt-6 space-y-3">
                    {pack.features.map((feature) => (
                      <div key={feature} className="flex gap-3 text-neutral-200">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="mt-8 w-full rounded-2xl bg-white px-6 py-6 text-base font-semibold text-neutral-950 hover:bg-neutral-200">
                    Start with this
                  </Button>
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
                <Video className="mb-5 h-8 w-8 text-orange-400" />
                <h3 className="text-xl font-semibold">Send one long video</h3>
                <p className="mt-3 leading-7 text-neutral-300">
                  Send a podcast, interview, webinar, talking-head clip or any long-form video you already have.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-white/10 bg-white/5 text-white">
              <CardContent className="p-7">
                <Clapperboard className="mb-5 h-8 w-8 text-orange-400" />
                <h3 className="text-xl font-semibold">We find the best moments</h3>
                <p className="mt-3 leading-7 text-neutral-300">
                  We pull out the strongest clips, shape them for short-form platforms and add captions and hooks.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-white/10 bg-white/5 text-white">
              <CardContent className="p-7">
                <Repeat className="mb-5 h-8 w-8 text-orange-400" />
                <h3 className="text-xl font-semibold">You get ready-to-post clips</h3>
                <p className="mt-3 leading-7 text-neutral-300">
                  You receive a batch of clips with post captions ready for TikTok, Reels, Shorts and LinkedIn.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <Clock className="mx-auto mb-5 h-10 w-10 text-orange-400" />
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Get your first 5 clips this week.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
            Send one long video and get a ready-to-post batch of short-form clips with captions, hooks and post captions.
          </p>

          <a href="mailto:charlesjckingsmill@gmail.com">
            <Button className="mt-8 rounded-2xl bg-orange-500 px-8 py-6 text-base font-semibold text-neutral-950 hover:bg-orange-400">
              Book the £99 trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-neutral-400 sm:flex-row">
          <div>© 2026 ClipFoundry. Short-form content from long-form video.</div>
          <div>charlesjckingsmill@gmail.com</div>
        </div>
      </footer>
    </main>
  );
}
