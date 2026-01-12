'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Button from '@/components/Button'
interface Blog {
  title: string
  description: string
  image: string
  stack: string[]
}

const blogs: Blog[] = [
  {
    title: 'AI in Healthcare',
    description: 'How AI is transforming modern healthcare solutions with advanced diagnostics, predictive analytics, and personalized treatment plans.',
    image: '/images/home/blog-one.png',
    stack: ['Cloud', 'AI', 'Healthcare', 'Technology', 'Analytics', 'Innovation']
  },
  {
    title: 'CO-AI: Multimodal AI Framework for Detecting Synthetic Films',
    description: 'A revolutionary framework combining computer vision, NLP, and audio analysis to detect AI-generated synthetic media in the film industry.',
    image: '/images/home/blog-three.png',
    stack: ['AI', 'Multimodal', 'Synthetic Media', 'Detection', 'Computer Vision', 'NLP']
  },
  {
    title: 'E-Commerce Growth',
    description: 'Driving conversions and customer engagement with data-driven e-commerce strategies and personalized shopping experiences.',
    image: '/images/home/blog-three.png',
    stack: ['E-Commerce', 'Data Analytics', 'Marketing', 'Technology', 'Growth', 'Strategy']
  },
  {
    title: 'EdTech Platforms',
    description: 'Enhancing learning experiences through innovative educational technology platforms and adaptive learning systems.',
    image: '/images/home/blog-one.png',
    stack: ['EdTech', 'Education', 'Technology', 'Learning', 'Innovation', 'Digital']
  },
  {
    title: 'Fintech Innovations',
    description: 'Revolutionizing banking and finance with smart technology solutions and digital transformation strategies.',
    image: '/images/home/blog-three.png',
    stack: ['Fintech', 'Banking', 'Finance', 'Technology', 'Innovation', 'Digital']
  }
]

export default function AllBlogs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1)
  const [swiperRef, setSwiperRef] = useState<any>(null)

  const handleSlideClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(null)
    }
  }

  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              All <span className="text-orange-500">Blogs</span>
            </h2>

          </div>
          <div className="mt-4 md:mt-0">
            <Button
              text="View All Blogs"
              icon="/icons/arrow-right.svg"
              size="medium"
              radius="full"
              href="#"
              variant="glass"
              className="inline-flex w-full md:w-auto justify-center"
            />

          </div>

        </div>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 3 }}
        className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-12"
      />
      
      <div className="relative">
        <Swiper
          onSwiper={setSwiperRef}
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 10,
            }
          }}
          className="pb-20"
        >
          { blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <motion.div
                  className="relative cursor-pointer"
                  onClick={() => handleSlideClick(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(index)}
                  whileHover={{ scale: 1}}
                  whileTap={{ scale: 2.5}}
                  transition={{ type: "spring", stiffness: 100, damping: 25 }}>
                  <AnimatePresence mode="wait">
                    {activeIndex === index ? (
                      <motion.div
                        key={`expanded-${index}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="relative rounded-3xl overflow-hidden border-2 border-orange-500/30 bg-gradient-to-br from-[#16161A] to-[#0A0A0A] shadow-2xl shadow-orange-500/10"
                        style={{ width: '519px', height: '580px' }}>

                        <div className="flex h-full">
                          <div className="w-1/2 relative">
                            <Image
                              src={blog.image}
                              alt={blog.title}
                              fill
                              className="object-cover rounded-l-3xl"
                              sizes="(max-width: 768px) 100vw, 259px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-l-3xl" />
                            <div className="absolute top-6 left-6">
                              <div className="flex flex-wrap gap-2">
                                {blog.stack.slice(0, 2).map((tech, idx) => (
                                  <motion.span
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="px-4 py-2 bg-black/60 backdrop-blur-sm text-white text-sm rounded-full border border-white/20"
                                  >
                                    {tech}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="w-1/2 p-8 flex flex-col justify-center">
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}>
                              <div className="flex flex-wrap gap-2 mb-6">
                                {blog.stack.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1.5 bg-gradient-to-b from-[#1A1A1A] to-[#0E0E0E] text-white text-xs rounded-full border border-orange-500/20 hover:border-orange-500/40 transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              <h3 className="text-2xl font-bold mb-4 leading-tight">
                                {blog.title}
                              </h3>
                              <p className="text-gray-300 mb-8 leading-relaxed">
                                {blog.description}
                              </p>

                               <Button
                                  text="Read Article"
                                  icon="/icons/arrow-right.svg"
                                  size="medium"
                                  radius="full"
                                  href="#"
                                  variant="glass"
                                  className="inline-flex w-full md:w-auto justify-center"
                                />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`collapsed-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative rounded-3xl overflow-hidden border-2 border-gray-800 hover:border-orange-500/30 transition-all duration-300 group"
                        style={{ width: '519px', height: '580px' }}
                      >
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 519px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {blog.stack.slice(0, 3).map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-xl font-bold mb-2 line-clamp-2">
                            {blog.title}
                          </h3>
                        </div>
                        {isActive && (
                          <motion.div
                            className="absolute top-4 right-4 w-3 h-3 bg-orange-500 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring' }}
                          />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>



      </div>


    </section>
  )
}