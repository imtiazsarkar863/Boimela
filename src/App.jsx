import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import card from './components/card'


function App() {
  const [count, setCount] = useState(0)
  const [showPdf, setShowPdf] = useState(false)
  const [showPdf2, setShowPdf2] = useState(false)
  const [showPdf3, setShowPdf3] = useState(false)
  const [showPdf4, setShowPdf4] = useState(false)
  const [showPdf5, setShowPdf5] = useState(false)
  const [showPdf6, setShowPdf6] = useState(false)
  const [showPdf7, setShowPdf7] = useState(false)
  const [showPdf8, setShowPdf8] = useState(false)
  const [showPdf9, setShowPdf9] = useState(false)
  const [showPdf10, setShowPdf10] = useState(false)
  const [showPdf11, setShowPdf11] = useState(false)
  const [showPdf12, setShowPdf12] = useState(false)
  const [showPdf13, setShowPdf13] = useState(false)
  const [showPdf14, setShowPdf14] = useState(false)
  const [showPdf15, setShowPdf15] = useState(false)
  const [showPdf16, setShowPdf16] = useState(false)


  return (
    <>
      < div className='App'>
        <img className='background' src="https://i.pinimg.com/736x/6d/5b/86/6d5b865db5c18dcf0a2d720cb87cd8df.jpg" alt="background" />
        <Navbar />
        <Footer />
        <main />
        <h1 className='title'>
          বইমেলা
        </h1>
        <h2 className='desc'>
          বইয়ের ন্যায় একগুচ্ছ অনুভূতি</h2>




        <div className="slider">
          <h1 className="relative text-white z-[1] text-[30px] top-[58vh] left-[50px] font-['copperplate'] font-extrabold"> Bengali Novels :</h1>
          <div className='cards'>

            <div className="book-set">

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book1" desc="book1 desc" onClick={() => setShowPdf(true)}>
                <img className='i1 h-74.5 w-70' src="https://i.pinimg.com/736x/9e/8a/88/9e8a88e794dfde56456d65ebc54316a6.jpg" alt="book1" />
                <p className='relative z-[1] text-white  text-xl  font-extralight'>কাঠগোলাপ</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book2" desc="book2 desc" onClick={() => setShowPdf2(true)}>
                <img className='i2 h-74.5 w-70' src="https://i.pinimg.com/1200x/ed/12/ae/ed12ae2fcf26beeeb6f453836452132e.jpg" alt="" />

                <p className='relative z-[1] text-white text-xl   font-extralight'>অপেক্ষা</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book3" desc="book3 desc" onClick={() => setShowPdf3(true)}>
                <img className='i3 h-74.5 w-70' src="https://rokbucket.rokomari.io/ProductNew20190903/260X372/A_Mrithu_valobashi_toka_-Salma_Choudhury-e5d52-445228.jpg" alt="" />

                <p className='relative z-[1] text-white text-xl   font-extralight'>আমৃত্যু_ভালোবাসি_তোকে</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh] ' title="book4" desc="book4 desc" onClick={() => setShowPdf4(true)}>
                <img className='i4 h-74.5 w-70' src="https://m.media-amazon.com/images/I/71WsDlf+JaL._SY522_.jpg" alt="" />
                <p className='relative z-[1] text-white text-xl   font-extralight'>ইকিগাই </p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book1" desc="book1 desc" onClick={() => setShowPdf5(true)}>
                <img className='i1 h-74.5 w-70' src="https://rokbucket.rokomari.io/ProductNew20190903/260X372/Kancher_Deowal_-Suchitra_Bhattacharya-1aa9a-51096.jpg" alt="book1" />

                <p className='relative z-[1] text-white text-xl  font-extralight'>কাঁচের_দেওয়াল <br />সুচিত্রা_ভট্টাচার্য</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="border border-white w-[200px] h-[300px] text-white relative top-[60vh]" desc="book2 desc" onClick={() => setShowPdf6(true)}>
                <img className='i2 h-74.5 w-70' src="https://imgs.search.brave.com/1ruklC0A0Lz1mm4Y6ryv7pFS49c787eShzMYv3TXMuM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kcml2/ZS5nb29nbGUuY29t/L3RodW1ibmFpbD9p/ZD0xOUtXZUIycFJL/enRkR1hvQi1WOUQx/RXRmNmFGRmxTR1gm/c3o9dzgwMC1oNjAw" alt="" />

                <p className='relative z-[1] text-white text-xl  font-extralight'>পদ্মজা <br />ইলমা_বেহরোজ</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book3" desc="book3 desc" onClick={() => setShowPdf7(true)}>
                <img className='i3 h-74.5 w-70' src="https://imgs.search.brave.com/3oC3bR5veMeehIlZ6DmbH8aSKW9wirHmpLLqBhJvI0k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZHJ6LmxhemNkbi5j/b20vc3RhdGljL2Jk/L3AvNTA0ZWY3ZTk4/MzQwOTAzMTkxNmZh/YjQ1Y2IxYjZkMWQu/anBnXzcyMHg3MjBx/ODAuanBn" alt="" />

                <p className='relative z-[1] text-white text-xl  font-extralight'>তোমাকে <br /> হুমায়ুন_আহমেদ</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh] ' title="book4" desc="book4 desc" onClick={() => setShowPdf8(true)}>
                <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/kIWTFqh4sbyhIuAgsb9Gyj1IJRMrmDuNIYvk0dd1WrE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yb2ti/dWNrZXQucm9rb21h/cmkuaW8vUHJvZHVj/dE5ldzIwMTkwOTAz/LzI2MFgzNzIvRGV2/ZGFzLVNhcmF0Y2hh/bmRyYV9DaGF0dG9w/YWRoeWF5LTIwZWRi/LTQwNzY5LmpwZw" alt="" />
                <p className='relative z-[1] text-white text-xl  font-extralight '>দেবদাস <br />শরৎচন্দ্র_চট্টোপাধ্যায</p>
              </div>

            </div>
            <div className="book-set" aria-hidden="true">

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book1" desc="book1 desc" onClick={() => setShowPdf(true)}>
                <img className='i1 h-74.5 w-70' src="https://i.pinimg.com/736x/9e/8a/88/9e8a88e794dfde56456d65ebc54316a6.jpg" alt="book1" />

                <p className='relative z-[1] text-white  text-xl  font-extralight'>কাঠগোলাপ</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book2" desc="book2 desc" onClick={() => setShowPdf2(true)}>
                <img className='i2 h-74.5 w-70' src="https://i.pinimg.com/1200x/ed/12/ae/ed12ae2fcf26beeeb6f453836452132e.jpg" alt="" />

                <p className='relative z-[1] text-white text-xl   font-extralight'>অপেক্ষা</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book3" desc="book3 desc" onClick={() => setShowPdf3(true)}>
                <img className='i3 h-74.5 w-70' src="https://rokbucket.rokomari.io/ProductNew20190903/260X372/A_Mrithu_valobashi_toka_-Salma_Choudhury-e5d52-445228.jpg" alt="" />

                <p className='relative z-[1] text-white text-xl   font-extralight'>আমৃত্যু ভালোবাসি তোকে</p>

              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh] ' title="book4" desc="book4 desc" onClick={() => setShowPdf4(true)}>
                <img className='i4 h-74.5 w-70' src="https://m.media-amazon.com/images/I/71WsDlf+JaL._SY522_.jpg" alt="" />
                <p className='relative z-[1] text-white text-xl   font-extralight'>ইকিগাই </p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book1" desc="book1 desc" onClick={() => setShowPdf5(true)}>
                <img className='i1 h-74.5 w-70' src="https://rokbucket.rokomari.io/ProductNew20190903/260X372/Kancher_Deowal_-Suchitra_Bhattacharya-1aa9a-51096.jpg" alt="book1" />

                <p className='relative z-[1] text-white text-xl  font-extralight'>কাঁচের দেওয়াল <br />সুচিত্রা_ভট্টাচার্য</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="border border-white w-[200px] h-[300px] text-white relative top-[60vh]" desc="book2 desc" onClick={() => setShowPdf6(true)}>
                <img className='i2 h-74.5 w-70' src="https://imgs.search.brave.com/1ruklC0A0Lz1mm4Y6ryv7pFS49c787eShzMYv3TXMuM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kcml2/ZS5nb29nbGUuY29t/L3RodW1ibmFpbD9p/ZD0xOUtXZUIycFJL/enRkR1hvQi1WOUQx/RXRmNmFGRmxTR1gm/c3o9dzgwMC1oNjAw" alt="" />
                <p className='relative z-[1] text-white text-xl  font-extralight'>পদ্মজা <br /> ইলমা_বেহরোজ</p>
              </div>


              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book3" desc="book3 desc" onClick={() => setShowPdf7(true)}>
                <img className='i3 h-74.5 w-70' src="https://imgs.search.brave.com/3oC3bR5veMeehIlZ6DmbH8aSKW9wirHmpLLqBhJvI0k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZHJ6LmxhemNkbi5j/b20vc3RhdGljL2Jk/L3AvNTA0ZWY3ZTk4/MzQwOTAzMTkxNmZh/YjQ1Y2IxYjZkMWQu/anBnXzcyMHg3MjBx/ODAuanBn" alt="" />

                <p className='relative z-[1] text-white text-xl  font-extralight'>তোমাকে - হুমায়ুন_আহমেদ</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh] ' title="book4" desc="book4 desc" onClick={() => setShowPdf8(true)}>
                <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/kIWTFqh4sbyhIuAgsb9Gyj1IJRMrmDuNIYvk0dd1WrE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yb2ti/dWNrZXQucm9rb21h/cmkuaW8vUHJvZHVj/dE5ldzIwMTkwOTAz/LzI2MFgzNzIvRGV2/ZGFzLVNhcmF0Y2hh/bmRyYV9DaGF0dG9w/YWRoeWF5LTIwZWRi/LTQwNzY5LmpwZw" alt="" />
                <p className='relative z-[1] text-white text-xl  font-extralight '>দেবদাস <br /> শরৎচন্দ্র_চট্টোপাধ্যায</p>
              </div>

            </div>
          </div>





          <div className="slide">
            <h1 className="relative text-white z-[1] text-[30px] top-[88vh] left-[50px] font-['Copperplate'] font-bold">English Novels:</h1>
            <div className='cards2'>
              <div className="book-set2">

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book1" desc="book1 desc" onClick={() => setShowPdf9(true)}>
                  <img className='i1 h-74.5 w-70' src="https://imgs.search.brave.com/HOPaZ6Srn_Hxc1k_szCaqqqcZ8Ee3mFLvToYeJRtBDs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGVuZ3Vpbi5jby5p/bi93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wNS85NzgxODQ3/OTQzOTEwLTEuanBn" alt="book1" />

                  <p className="relative z-[1] text-white  text-xl  font-['copperplate']">Atomic habits</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book2" desc="book2 desc" onClick={() => setShowPdf10(true)}>
                  <img className='i2 h-74.5 w-70' src="https://imgs.search.brave.com/ogE4hPk93_DnvfvJZZWQl41N5H78cKo9wh70SwJHGUc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzViLzFj/LzdhLzViMWM3YTBh/MjM3NmEwOTdmZmUw/ZDcxMzZkOWYzNGY3/LmpwZw" alt="" />

                  <p className="relative z-[1] text-white text-xl   font-['copperplate']">Rich-dad-poor-dad</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book3" desc="book3 desc" onClick={() => setShowPdf11(true)}>
                  <img className='i3 h-74.5 w-70' src="https://imgs.search.brave.com/2hHtfk5neNScjppF8utpIqwpqjmOdW5r3Hg1BvmaZcI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWVlc2hvLmNv/bS9pbWFnZXMvcHJv/ZHVjdHMvODE2Njgx/MjQvYnlkYWtfNTEy/LndlYnA_d2lkdGg9/NTEy" alt="" />

                  <p className="relative z-[1] text-white text-xl   font-['copperplate']">The Power Of Your <br /> Subconscious Mind</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh] ' title="book4" desc="book4 desc" onClick={() => setShowPdf12(true)}>
                  <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/TJFcRSNPUXG48RGK32un2lInZDtXXVSCpnBoGIKIhj8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFteHZVOVR1Nkwu/anBn" alt="" />
                  <p className="relative z-[1] text-white text-xl   font-['copperplate']">The Psychology of <br /> Money</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book1" desc="book1 desc" onClick={() => setShowPdf13(true)}>
                  <img className='i1 h-74.5 w-70' src="https://imgs.search.brave.com/MPFRjdfdGBrsERRSu_AbeI0DPduvdKOuRkzFbfNd300/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFTbVRoejB1ckwu/anBn" alt="book1" />

                  <p className="relative z-[1] text-white text-xl  font-['copperplate']">The Art of Letting Go <br /> Miles Niska</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="border border-white w-[200px] h-[300px] text-white relative top-[60vh]" desc="book2 desc" onClick={() => setShowPdf14(true)}>
                  <img className='i2 h-74.5 w-70' src="https://imgs.search.brave.com/cac0HAZFZPnoofkIhxQ2VEXyvHCCQ0YQCCu8vq__omA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGx1Z2dlZGluLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wMS9ib3ktaW4t/c3RyaXBlZC1wYWph/bWFzLWNvdmVyLTY4/MngxMDI0LmpwZw" alt="" />

                  <p className="relative z-[1] text-white text-xl  font-['copperplate']">The Boy in The Striped Pajamas </p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book3" desc="book3 desc" onClick={() => setShowPdf15(true)}>
                  <img className='i3 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1597798677i/55019161.jpg" alt="" />

                  <p className="relative z-[1] text-white text-xl  font-['copperplate']">The Da Vinci Code</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh] ' title="book4" desc="book4 desc" onClick={() => setShowPdf16(true)}>
                  <img className='i4 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1681804503i/129915654.jpg" alt="" />
                  <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">Pride and Prejudice</p>
                </div>

              </div>
              <div className="book-set2" aria-hidden="true">

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book1" desc="book1 desc" onClick={() => setShowPdf9(true)}>
                  <img className='i1 h-74.5 w-70' src="https://imgs.search.brave.com/HOPaZ6Srn_Hxc1k_szCaqqqcZ8Ee3mFLvToYeJRtBDs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGVuZ3Vpbi5jby5p/bi93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wNS85NzgxODQ3/OTQzOTEwLTEuanBn" alt="book1" />

                  <p className="relative z-[1] text-white  text-xl  font-['copperplate']">Atomic habits</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book2" desc="book2 desc" onClick={() => setShowPdf10(true)}>
                  <img className='i2 h-74.5 w-70' src="https://imgs.search.brave.com/ogE4hPk93_DnvfvJZZWQl41N5H78cKo9wh70SwJHGUc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzViLzFj/LzdhLzViMWM3YTBh/MjM3NmEwOTdmZmUw/ZDcxMzZkOWYzNGY3/LmpwZw" alt="" />

                  <p className="relative z-[1] text-white text-xl   font-['copperplate']">Rich-dad-poor-dad</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book3" desc="book3 desc" onClick={() => setShowPdf11(true)}>
                  <img className='i3 h-74.5 w-70' src="https://imgs.search.brave.com/2hHtfk5neNScjppF8utpIqwpqjmOdW5r3Hg1BvmaZcI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWVlc2hvLmNv/bS9pbWFnZXMvcHJv/ZHVjdHMvODE2Njgx/MjQvYnlkYWtfNTEy/LndlYnA_d2lkdGg9/NTEy" alt="" />

                  <p className="relative z-[1] text-white text-xl   font-['copperplate']">The Power Of Your <br /> Subconscious Mind</p>

                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh] ' title="book4" desc="book4 desc" onClick={() => setShowPdf12(true)}>
                  <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/TJFcRSNPUXG48RGK32un2lInZDtXXVSCpnBoGIKIhj8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFteHZVOVR1Nkwu/anBn" alt="" />
                  <p className="relative z-[1] text-white text-xl   font-['copperplate']">The Psychology of <br /> Money</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book1" desc="book1 desc" onClick={() => setShowPdf13(true)}>
                  <img className='i1 h-74.5 w-70' src="https://imgs.search.brave.com/MPFRjdfdGBrsERRSu_AbeI0DPduvdKOuRkzFbfNd300/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFTbVRoejB1ckwu/anBn" alt="book1" />

                  <p className="relative z-[1] text-white text-xl  font-['copperplate']">The Art of Letting Go <br /> Miles Niska</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="border border-white w-[200px] h-[300px] text-white relative top-[60vh]" desc="book2 desc" onClick={() => setShowPdf14(true)}>
                  <img className='i2 h-74.5 w-70' src="https://imgs.search.brave.com/cac0HAZFZPnoofkIhxQ2VEXyvHCCQ0YQCCu8vq__omA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGx1Z2dlZGluLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wMS9ib3ktaW4t/c3RyaXBlZC1wYWph/bWFzLWNvdmVyLTY4/MngxMDI0LmpwZw" alt="" />
                  <p className="relative z-[1] text-white text-xl  font-['copperplate']">The Boy in The Striped Pajamas </p>
                </div>


                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book3" desc="book3 desc" onClick={() => setShowPdf15(true)}>
                  <img className='i3 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1597798677i/55019161.jpg" alt="" />

                  <p className="relative z-[1] text-white text-xl  font-['copperplate']">The Da Vinci Code</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh] ' title="book4" desc="book4 desc" onClick={() => setShowPdf16(true)}>
                  <img className='i4 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1681804503i/129915654.jpg" alt="" />
                  <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">Pride and Prejudice</p>
                </div>
              </div>
            </div>
          </div>
        </div>





        <div className="slider2">

          <h1 className="relative text-white z-[1] text-[30px] top-[110vh] left-[50px] font-['Copperplate'] font-bold">Manga & Manwha:</h1>
          <div className='cards3'>
            <div className="book-set3">

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh]' title="book1" desc="book1 desc" >
                <a href="https://readsololevelingmanga.us/"><img className='i1 h-74.5 w-70' src="https://imgs.search.brave.com/h3aSZZ1DSS3lyh5udw3jJp0Kp6hmevQdrOPtamL0EcA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vNi82Yy9T/b2xvX0xldmVsaW5n/X1ZvbHVtZV8xX0Nv/dmVyLmpwZz91dG1f/c291cmNlPWVuLndp/a2lwZWRpYS5vcmcm/dXRtX2NhbXBhaWdu/PXBhcnNlciZ1dG1f/Y29udGVudD10aHVt/Ym5haWxfdW5zY2Fs/ZWQ" alt="book1" />
                </a>
                <p className="relative z-[1] text-white  text-xl  font-['copperplate']">Solo Levelling</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh]' title="book2" desc="book2 desc" >
                <a href="https://www.readsakamotoday.com/"> <img className='i2 h-74.5 w-70' src="https://imgs.search.brave.com/GLM-Zv257YMfQVW8JSR2HgNIS7mycXyY1J4Hq_hvQ8U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vYy9jOC9T/YWthbW90b19EYXlz/X21hbmdhX3ZvbHVt/ZV8xLmpwZz91dG1f/c291cmNlPWVuLndp/a2lwZWRpYS5vcmcm/dXRtX2NhbXBhaWdu/PXBhcnNlciZ1dG1f/Y29udGVudD10aHVt/Ym5haWxfdW5zY2Fs/ZWQ" alt="" />
                </a>
                <p className="relative z-[1] text-white text-xl   font-['copperplate']">Sakamoto Days</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh]' title="book3" desc="book3 desc" >
                <a href="https://read-horimiya.online/"> <img className='i3 h-74.5 w-70' src="https://imgs.search.brave.com/VJ04rARtxRypWYA_Xzvv_fv6aYkCl7iB4bWMcWAt-6E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vYS9hYi9W/b2wxaG9yaS5qcGc_/dXRtX3NvdXJjZT1l/bi53aWtpcGVkaWEu/b3JnJmFtcDt1dG1f/Y2FtcGFpZ249aW5k/ZXgmYW1wO3V0bV9j/b250ZW50PXRodW1i/bmFpbF91bnNjYWxl/ZA" alt="" />
                </a>
                <p className="relative z-[1] text-white text-xl   font-['copperplate']">Horimiya</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                <a href="https://w1.vinlandsaga.website/"> <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/Nx-3KIkkRzwG8qGaJEnglPCDlZUHDliecsLSID6Px9Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vNS81MS9W/aW5sYW5kX1NhZ2Ff/dm9sdW1lXzAxX2Nv/dmVyLmpwZz91dG1f/c291cmNlPWVuLndp/a2lwZWRpYS5vcmcm/YW1wO3V0bV9jYW1w/YWlnbj1pbmRleCZh/bXA7dXRtX2NvbnRl/bnQ9dGh1bWJuYWls/X3Vuc2NhbGVk" alt="" />
                </a>
                <p className="relative z-[1] text-white text-xl   font-['copperplate']">Vinland saga</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh]' title="book1" desc="book1 desc" >
                <a href="https://mangadex.org/title/c7b2a840-d4a3-4fc1-a1f2-2371189089e6/plunderer?tab=chapters&page=2">  <img className='i1 h-74.5 w-70' src="https://imgs.search.brave.com/Jsu3wqKSUXrxsYWEKekkMoAA4CTxOL-7Y7gyC4NZw98/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMS8xYy9Q/bHVuZGVyZXJfbWFu/Z2ElMkNfdm9sdW1l/XzEuanBnP3V0bV9z/b3VyY2U9ZW4ud2lr/aXBlZGlhLm9yZyZh/bXA7dXRtX2NhbXBh/aWduPWluZGV4JmFt/cDt1dG1fY29udGVu/dD10aHVtYm5haWxf/dW5zY2FsZWQ" alt="book1" />
                </a>
                <p className="relative z-[1] text-white text-xl  font-['copperplate']">THE Plunderer</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh]' title="border border-white w-[200px] h-[300px] text-white relative top-[60vh]" desc="book2 desc" >
                <a href="https://w14.my-happy-marriage.com/"> <img className='i2 h-74.5 w-70' src="https://w14.my-happy-marriage.com/wp-content/uploads/2024/03/My-Happy-Marriage-Manga-Volume-1.webp" alt="" />
                </a>
                <p className="relative z-[1] text-white text-xl  font-['copperplate']">My happy marraige </p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh]' title="book3" desc="book3 desc" >
                <a href="http://w5.ao-haru-ride.online/"><img className='i3 h-74.5 w-70' src="https://imgs.search.brave.com/SJoapM-KJuAjJuY6UKwqyZUuvtZerwWMpIE2S9z-IJQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMS8xNC9B/b19IYXJ1X1JpZGVf/Vm9sdW1lXzEuanBn/P3V0bV9zb3VyY2U9/ZW4ud2lraXBlZGlh/Lm9yZyZhbXA7dXRt/X2NhbXBhaWduPWlu/ZGV4JmFtcDt1dG1f/Y29udGVudD10aHVt/Ym5haWxfdW5zY2Fs/ZWQ" alt="" />
                </a>
                <p className="relative z-[1] text-white text-xl  font-['copperplate']">Ao haru ride</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                <a href="https://www.omoi.com/series/your-lie-in-april/read/b07b643b-ca03-4ee4-b15c-3300f752429d">  <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/GA4976gd3TTQnoFRWOpAny2onYDdB5MlwyNltzOaD4c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vZC9kZS9Z/b3VyX0xpZV9pbl9B/cHJpbF9NYW5nYV9j/b3Zlci5wbmc_dXRt/X3NvdXJjZT1lbi53/aWtpcGVkaWEub3Jn/JmFtcDt1dG1fY2Ft/cGFpZ249aW5kZXgm/YW1wO3V0bV9jb250/ZW50PXRodW1ibmFp/bF91bnNjYWxlZA" alt="" />
                </a>
                <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">Your lie in april</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                <a href="https://demonslayermanga.us.com/">  <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/QdpmBf8fzcxjJffmYmCc2JN-OAyXqSaCRKhr-hMtlHo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bWFuZ2EtbmV3cy5j/b20vcHVibGljL2lt/YWdlcy92b2xzLy5k/ZW1vbi1zbGF5ZXIt/MjAtcGFuaW5pX21l/ZGl1bS5qcGc" alt="" />
                </a>
                <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">Demon Slayer</p>
              </div>
              <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                <a href="https://w3.chainsawmann.com/">  <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/pbeTICk3aVqdstUdlJuNu5V6zR21vdttOuX-E-yHrv0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMi8yNC9D/aGFpbnNhd21hbi5q/cGc_dXRtX3NvdXJj/ZT1lbi53aWtpcGVk/aWEub3JnJmFtcDt1/dG1fY2FtcGFpZ249/aW5kZXgmYW1wO3V0/bV9jb250ZW50PXRo/dW1ibmFpbF91bnNj/YWxlZA" alt="" />
                </a>
                <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">chainsaw man</p>
              </div>
              <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                <a href="https://tokyorevengers.fandom.com/wiki/Tokyo_Revengers_(Manga)">  <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/SIkg2Wq5hwxKxFtrWWFivwF-FepvRGW5ktHfjLLlpeI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vYi9iMS9U/b2t5b19SZXZlbmdl/cnNfdm9sdW1lXzFf/Y292ZXIuanBnP3V0/bV9zb3VyY2U9ZW4u/d2lraXBlZGlhLm9y/ZyZ1dG1fY2FtcGFp/Z249cGFyc2VyJnV0/bV9jb250ZW50PXRo/dW1ibmFpbF91bnNj/YWxlZA" alt="" />
                </a>
                <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">tokyo revenger</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                <a href="https://deathnote.fandom.com/wiki/Death_Note_(manga)">  <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/u990H9f_SgmiWvWKVWTLshO_kSBjLPT2rrwTJE3yQlc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vNi82Zi9E/ZWF0aF9Ob3RlX1Zv/bF8xLmpwZz91dG1f/c291cmNlPWVuLndp/a2lwZWRpYS5vcmcm/YW1wO3V0bV9jYW1w/YWlnbj1pbmRleCZh/bXA7dXRtX2NvbnRl/bnQ9dGh1bWJuYWls/X3Vuc2NhbGVk" alt="" />
                </a>
                <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">Death note</p>
              </div>
              <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                <a href="https://jujutsukaisenmanga.pro/">  <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/Apmn9w27-HTEr1n3KSDvOmlVA5tYch6oQ10Ls4_IxN8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vNC80Ni9K/dWp1dHN1X2thaXNl/bi5qcGc_dXRtX3Nv/dXJjZT1lbi53aWtp/cGVkaWEub3JnJmFt/cDt1dG1fY2FtcGFp/Z249aW5kZXgmYW1w/O3V0bV9jb250ZW50/PXRodW1ibmFpbF91/bnNjYWxlZA" alt="" />
                </a>
                <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">Jujutsu Kaisen</p>
              </div>
              <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                <a href="https://attackontitan.fandom.com/wiki/Attack_on_Titan_(Manga)?file=Volume_1_Cover.png">  <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/cn3RbPaM8FJXGjIuuorujt-Na-2CUAZE30cdvKjcwfg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vZC9kNi9T/aGluZ2VraV9ub19L/eW9qaW5fbWFuZ2Ff/dm9sdW1lXzEuanBn/P3V0bV9zb3VyY2U9/ZW4ud2lraXBlZGlh/Lm9yZyZhbXA7dXRt/X2NhbXBhaWduPWlu/ZGV4JmFtcDt1dG1f/Y29udGVudD10aHVt/Ym5haWxfdW5zY2Fs/ZWQ" alt="" />
                </a>
                <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">Attack on titan</p>
              </div>
              <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                <a href="https://mangaspyfamily.com/">  <img className='i4 h-74.5 w-70' src="https://cdn0-production-images-kly.akamaized.net/wQd3McgbupEseI9b6XQAjiFfBF8=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3998604/original/077948100_1650275092-MV5BZmY2MDYxMjAtNDFmNS00YmY5LWJhMTItMDZkZGNkMjg5ODJiXkEyXkFqcGdeQXVyODMyNTM0MjM_._V1_.jpg" alt="" />
                </a>
                <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">Spy x Family</p>
</div>

              </div>

              <div className="book-set3" aria-hidden="true">

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh]' title="book1" desc="book1 desc" >
                  <a href="https://readsololevelingmanga.us/"><img className='i1 h-74.5 w-70' src="https://imgs.search.brave.com/h3aSZZ1DSS3lyh5udw3jJp0Kp6hmevQdrOPtamL0EcA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vNi82Yy9T/b2xvX0xldmVsaW5n/X1ZvbHVtZV8xX0Nv/dmVyLmpwZz91dG1f/c291cmNlPWVuLndp/a2lwZWRpYS5vcmcm/dXRtX2NhbXBhaWdu/PXBhcnNlciZ1dG1f/Y29udGVudD10aHVt/Ym5haWxfdW5zY2Fs/ZWQ" alt="book1" />
                  </a>
                  <p className="relative z-[1] text-white  text-xl  font-['copperplate']">Solo Levelling</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh]' title="book2" desc="book2 desc" >
                  <a href="https://www.readsakamotoday.com/"> <img className='i2 h-74.5 w-70' src="https://imgs.search.brave.com/GLM-Zv257YMfQVW8JSR2HgNIS7mycXyY1J4Hq_hvQ8U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vYy9jOC9T/YWthbW90b19EYXlz/X21hbmdhX3ZvbHVt/ZV8xLmpwZz91dG1f/c291cmNlPWVuLndp/a2lwZWRpYS5vcmcm/dXRtX2NhbXBhaWdu/PXBhcnNlciZ1dG1f/Y29udGVudD10aHVt/Ym5haWxfdW5zY2Fs/ZWQ" alt="" />
                  </a>
                  <p className="relative z-[1] text-white text-xl   font-['copperplate']">Sakamoto Days</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh]' title="book3" desc="book3 desc" >
                  <a href="https://read-horimiya.online/"> <img className='i3 h-74.5 w-70' src="https://imgs.search.brave.com/VJ04rARtxRypWYA_Xzvv_fv6aYkCl7iB4bWMcWAt-6E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vYS9hYi9W/b2wxaG9yaS5qcGc_/dXRtX3NvdXJjZT1l/bi53aWtpcGVkaWEu/b3JnJmFtcDt1dG1f/Y2FtcGFpZ249aW5k/ZXgmYW1wO3V0bV9j/b250ZW50PXRodW1i/bmFpbF91bnNjYWxl/ZA" alt="" />
                  </a>
                  <p className="relative z-[1] text-white text-xl   font-['copperplate']">Horimiya</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                  <a href="https://w1.vinlandsaga.website/"> <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/Nx-3KIkkRzwG8qGaJEnglPCDlZUHDliecsLSID6Px9Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vNS81MS9W/aW5sYW5kX1NhZ2Ff/dm9sdW1lXzAxX2Nv/dmVyLmpwZz91dG1f/c291cmNlPWVuLndp/a2lwZWRpYS5vcmcm/YW1wO3V0bV9jYW1w/YWlnbj1pbmRleCZh/bXA7dXRtX2NvbnRl/bnQ9dGh1bWJuYWls/X3Vuc2NhbGVk" alt="" />
                  </a>
                  <p className="relative z-[1] text-white text-xl   font-['copperplate']">Vinland saga</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh]' title="book1" desc="book1 desc" >
                  <a href="https://mangadex.org/title/c7b2a840-d4a3-4fc1-a1f2-2371189089e6/plunderer?tab=chapters&page=2">  <img className='i1 h-74.5 w-70' src="https://imgs.search.brave.com/Jsu3wqKSUXrxsYWEKekkMoAA4CTxOL-7Y7gyC4NZw98/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMS8xYy9Q/bHVuZGVyZXJfbWFu/Z2ElMkNfdm9sdW1l/XzEuanBnP3V0bV9z/b3VyY2U9ZW4ud2lr/aXBlZGlhLm9yZyZh/bXA7dXRtX2NhbXBh/aWduPWluZGV4JmFt/cDt1dG1fY29udGVu/dD10aHVtYm5haWxf/dW5zY2FsZWQ" alt="book1" />
                  </a>
                  <p className="relative z-[1] text-white text-xl  font-['copperplate']">THE Plunderer</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh]' title="border border-white w-[200px] h-[300px] text-white relative top-[60vh]" desc="book2 desc" >
                  <a href="https://w14.my-happy-marriage.com/"> <img className='i2 h-74.5 w-70' src="https://w14.my-happy-marriage.com/wp-content/uploads/2024/03/My-Happy-Marriage-Manga-Volume-1.webp" alt="" />
                  </a>
                  <p className="relative z-[1] text-white text-xl  font-['copperplate']">My happy marraige </p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh]' title="book3" desc="book3 desc" >
                  <a href="http://w5.ao-haru-ride.online/"><img className='i3 h-74.5 w-70' src="https://imgs.search.brave.com/SJoapM-KJuAjJuY6UKwqyZUuvtZerwWMpIE2S9z-IJQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMS8xNC9B/b19IYXJ1X1JpZGVf/Vm9sdW1lXzEuanBn/P3V0bV9zb3VyY2U9/ZW4ud2lraXBlZGlh/Lm9yZyZhbXA7dXRt/X2NhbXBhaWduPWlu/ZGV4JmFtcDt1dG1f/Y29udGVudD10aHVt/Ym5haWxfdW5zY2Fs/ZWQ" alt="" />
                  </a>
                  <p className="relative z-[1] text-white text-xl  font-['copperplate']">Ao haru ride</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                  <a href="https://www.omoi.com/series/your-lie-in-april/read/b07b643b-ca03-4ee4-b15c-3300f752429d">  <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/GA4976gd3TTQnoFRWOpAny2onYDdB5MlwyNltzOaD4c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vZC9kZS9Z/b3VyX0xpZV9pbl9B/cHJpbF9NYW5nYV9j/b3Zlci5wbmc_dXRt/X3NvdXJjZT1lbi53/aWtpcGVkaWEub3Jn/JmFtcDt1dG1fY2Ft/cGFpZ249aW5kZXgm/YW1wO3V0bV9jb250/ZW50PXRodW1ibmFp/bF91bnNjYWxlZA" alt="" />
                  </a>
                  <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">Your lie in april</p>
                </div>



                <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                  <a href="https://demonslayermanga.us.com/">  <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/QdpmBf8fzcxjJffmYmCc2JN-OAyXqSaCRKhr-hMtlHo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bWFuZ2EtbmV3cy5j/b20vcHVibGljL2lt/YWdlcy92b2xzLy5k/ZW1vbi1zbGF5ZXIt/MjAtcGFuaW5pX21l/ZGl1bS5qcGc" alt="" />
                  </a>
                  <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">Demon Slayer</p>
                </div>
                <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                  <a href="https://w3.chainsawmann.com/">  <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/pbeTICk3aVqdstUdlJuNu5V6zR21vdttOuX-E-yHrv0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMi8yNC9D/aGFpbnNhd21hbi5q/cGc_dXRtX3NvdXJj/ZT1lbi53aWtpcGVk/aWEub3JnJmFtcDt1/dG1fY2FtcGFpZ249/aW5kZXgmYW1wO3V0/bV9jb250ZW50PXRo/dW1ibmFpbF91bnNj/YWxlZA" alt="" />
                  </a>
                  <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">chainsaw man</p>
                </div>
                <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                  <a href="https://tokyorevengers.fandom.com/wiki/Tokyo_Revengers_(Manga)">  <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/SIkg2Wq5hwxKxFtrWWFivwF-FepvRGW5ktHfjLLlpeI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vYi9iMS9U/b2t5b19SZXZlbmdl/cnNfdm9sdW1lXzFf/Y292ZXIuanBnP3V0/bV9zb3VyY2U9ZW4u/d2lraXBlZGlhLm9y/ZyZ1dG1fY2FtcGFp/Z249cGFyc2VyJnV0/bV9jb250ZW50PXRo/dW1ibmFpbF91bnNj/YWxlZA" alt="" />
                  </a>
                  <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">tokyo revenger</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                  <a href="https://deathnote.fandom.com/wiki/Death_Note_(manga)">  <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/u990H9f_SgmiWvWKVWTLshO_kSBjLPT2rrwTJE3yQlc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vNi82Zi9E/ZWF0aF9Ob3RlX1Zv/bF8xLmpwZz91dG1f/c291cmNlPWVuLndp/a2lwZWRpYS5vcmcm/YW1wO3V0bV9jYW1w/YWlnbj1pbmRleCZh/bXA7dXRtX2NvbnRl/bnQ9dGh1bWJuYWls/X3Vuc2NhbGVk" alt="" />
                  </a>
                  <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">Death note</p>
                </div>
                <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                  <a href="https://jujutsukaisenmanga.pro/">  <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/Apmn9w27-HTEr1n3KSDvOmlVA5tYch6oQ10Ls4_IxN8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vNC80Ni9K/dWp1dHN1X2thaXNl/bi5qcGc_dXRtX3Nv/dXJjZT1lbi53aWtp/cGVkaWEub3JnJmFt/cDt1dG1fY2FtcGFp/Z249aW5kZXgmYW1w/O3V0bV9jb250ZW50/PXRodW1ibmFpbF91/bnNjYWxlZA" alt="" />
                  </a>
                  <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">Jujutsu Kaisen</p>
                </div>
                <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                  <a href="https://attackontitan.fandom.com/wiki/Attack_on_Titan_(Manga)?file=Volume_1_Cover.png">  <img className='i4 h-74.5 w-70' src="https://imgs.search.brave.com/cn3RbPaM8FJXGjIuuorujt-Na-2CUAZE30cdvKjcwfg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vZC9kNi9T/aGluZ2VraV9ub19L/eW9qaW5fbWFuZ2Ff/dm9sdW1lXzEuanBn/P3V0bV9zb3VyY2U9/ZW4ud2lraXBlZGlh/Lm9yZyZhbXA7dXRt/X2NhbXBhaWduPWlu/ZGV4JmFtcDt1dG1f/Y29udGVudD10aHVt/Ym5haWxfdW5zY2Fs/ZWQ" alt="" />
                  </a>
                  <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">Attack on titan</p>
                </div>
                <div className='border border-white w-[200px] h-[300px] text-white relative top-[112vh] ' title="book4" desc="book4 desc" >
                  <a href="https://mangaspyfamily.com/">  <img className='i4 h-74.5 w-70' src="https://cdn0-production-images-kly.akamaized.net/wQd3McgbupEseI9b6XQAjiFfBF8=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3998604/original/077948100_1650275092-MV5BZmY2MDYxMjAtNDFmNS00YmY5LWJhMTItMDZkZGNkMjg5ODJiXkEyXkFqcGdeQXVyODMyNTM0MjM_._V1_.jpg" alt="" />
                  </a>
                  <p className="relative z-[1] text-white text-xl  font-['copperplate'] ">Spy x Family</p>
                </div>

              </div>
            </div>
          </div>

          <h1 className="last">More books will be added soon....</h1>








          {showPdf && (
            <div className="fixed inset-0 z-[10] bg-white/95 p-4">
              <button
                className="text-white bg-red-600 text-xl m-10 p-10 cursor-pointer w-[3vw] h-[6vh]"
                onClick={() => setShowPdf(false)}
              >
                ✕

              </button>
              <h1 className="relative z-[1] top-[0px] left-[900px] text-black text-[50px] font-extrabold font-['Noto_Serif_Bengali']">
                কাঠগোলাপ

              </h1>
              <div className="flex items-start gap-4 mt-6">
                <p className="relative z-[1] top-[0px] left-[980px] text-black text-[20px] font-extrabold font-['Noto_Serif_Bengali']">-- ইমরান হোসেন আদিব</p>
                <iframe
                  src="https://drive.google.com/file/d/122w7GDN5jLkmmo0re2SaYVdDQY8S2hiG/preview"
                  className="w-[40vw] h-[80vh] relative top-[-50px] left-[-180px]"
                  style={{ border: "none" }}
                  title="কাঠগোলাপ PDF"
                />
                <h2 className="relative z-[1] top-[70px] left-[20px] text-black text-[20px] font-extrabold font-['copperplate']">part_1</h2>
                <iframe
                  src="https://www.youtube.com/embed/xWRM1E3dq08?si=70Kdesq8PmMsUo49" title="YouTube video player"
                  className="w-[40vw] h-[40vh] relative top-[100px] left-[-80px]"
                  style={{ border: "none" }}
                  allowFullScreen
                />
                <h1 className="relative z-[1] top-[500px] left-[-100px] text-black text-[15px] font-extrabold font-['Noto_Serif_Bengali">will be updated soon...</h1>
              </div>
            </div>
          )}




          {showPdf2 && (
            <div className="fixed inset-0 z-[10] bg-white/95 p-4">
              <button
                className="text-white bg-red-600 text-xl m-10 p-10 cursor-pointer w-[3vw] h-[6vh]"
                onClick={() => setShowPdf2(false)}
              >
                ✕

              </button>
              <h1 className="relative z-[1] top-[0px] left-[900px] text-black text-[50px] font-extrabold font-['Noto_Serif_Bengali']">
                অপেক্ষা

              </h1>
              <div className="flex items-start gap-4 mt-6">
                <p className="relative z-[1] top-[0px] left-[980px] text-black text-[20px] font-extrabold font-['Noto_Serif_Bengali']">হুমায়ূন আহমেদ</p>
                <iframe
                  src="https://drive.google.com/file/d/1h98LwIPYuMLLRzEiVyFhPzklNcnGpIdk/view?usp=sharing"
                  className="w-[40vw] h-[80vh] relative top-[-50px] left-[-180px]"
                  style={{ border: "none" }}
                  title="কাঠগোলাপ PDF"
                />
                <h2 className="relative z-[1] top-[70px] left-[20px] text-black text-[20px] font-extrabold font-['copperplate']">part_1</h2>
                <iframe
                  src="https://www.youtube.com/embed/NV_VQfS64JA?si=ZytAiggl3QBkpahM" title="YouTube video player"
                  className="w-[40vw] h-[40vh] relative top-[100px] left-[-80px]"
                  style={{ border: "none" }}
                  allowFullScreen
                />
                <h1 className="relative z-[1] top-[500px] left-[-100px] text-black text-[15px] font-extrabold font-['Noto_Serif_Bengali">will be updated soon...</h1>
              </div>
            </div>
          )}




          {showPdf3 && (
            <div className="fixed inset-0 z-[10] bg-white/95 p-4">
              <button
                className="text-white bg-red-600 text-xl m-10 p-10 cursor-pointer w-[3vw] h-[6vh]"
                onClick={() => setShowPdf3(false)}
              >
                ✕

              </button>
              <h1 className="relative z-[1] top-[0px] left-[900px] text-black text-[50px] font-extrabold font-['Noto_Serif_Bengali']">
                আমৃত্যু_ভালোবাসি_তোকে

              </h1>
              <div className="flex items-start gap-4 mt-6">
                <p className="relative z-[1] top-[0px] left-[980px] text-black text-[20px] font-extrabold font-['Noto_Serif_Bengali']">সালমা চৌধুরী</p>
                <iframe
                  src="https://drive.google.com/file/d/1JDEabg1FtljKiKvjAWmf90-zfD6IS0xQ/view?usp=sharing"
                  className="w-[40vw] h-[80vh] relative top-[-50px] left-[-180px]"
                  style={{ border: "none" }}
                  title="কাঠগোলাপ PDF"
                />
                <h2 className="relative z-[1] top-[70px] left-[20px] text-black text-[20px] font-extrabold font-['copperplate']">part_1</h2>
                <iframe
                  src="https://www.youtube.com/embed/3rciT30C-Qg?si=DBZWF5g7Rci-20Kh" title="YouTube video player"
                  className="w-[40vw] h-[40vh] relative top-[100px] left-[-80px]"
                  style={{ border: "none" }}
                  allowFullScreen
                />
                <h1 className="relative z-[1] top-[500px] left-[-100px] text-black text-[15px] font-extrabold font-['Noto_Serif_Bengali">will be updated soon...</h1>
              </div>
            </div>
          )}




          {showPdf4 && (
            <div className="fixed inset-0 z-[10] bg-white/95 p-4">
              <button
                className="text-white bg-red-600 text-xl m-10 p-10 cursor-pointer w-[3vw] h-[6vh]"
                onClick={() => setShowPdf4(false)}
              >
                ✕

              </button>
              <h1 className="relative z-[1] top-[0px] left-[900px] text-black text-[50px] font-extrabold font-['Noto_Serif_Bengali']">
                ইকিগাই

              </h1>
              <div className="flex items-start gap-4 mt-6">
                <p className="relative z-[1] top-[0px] left-[980px] text-black text-[20px] font-extrabold font-['Noto_Serif_Bengali']">হেক্টর গার্সিয়া</p>
                <iframe
                  src="https://drive.google.com/file/d/1KmXAsSmbiVswvQ7Sx55hIzGUyqFIOOnY/view?usp=sharing"
                  className="w-[40vw] h-[80vh] relative top-[-50px] left-[-180px]"
                  style={{ border: "none" }}
                  title="কাঠগোলাপ PDF"
                />
                <h2 className="relative z-[1] top-[70px] left-[20px] text-black text-[20px] font-extrabold font-['copperplate']">part_1</h2>
                <iframe
                  src="https://www.youtube.com/embed/yY9ManRMncs?si=rSkZjGqtwGdk0EnB" title="YouTube video player"
                  className="w-[40vw] h-[40vh] relative top-[100px] left-[-80px]"
                  style={{ border: "none" }}
                  allowFullScreen
                />
                <h1 className="relative z-[1] top-[500px] left-[-100px] text-black text-[15px] font-extrabold font-['Noto_Serif_Bengali">will be updated soon...</h1>
              </div>
            </div>
          )}



          {showPdf5 && (
            <div className="fixed inset-0 z-[10] bg-white/95 p-4">
              <button
                className="text-white bg-red-600 text-xl m-10 p-10 cursor-pointer w-[3vw] h-[6vh]"
                onClick={() => setShowPdf5(false)}
              >
                ✕

              </button>
              <h1 className="relative z-[1] top-[0px] left-[900px] text-black text-[50px] font-extrabold font-['Noto_Serif_Bengali']">
                কাঁচের_দেওয়াল

              </h1>
              <div className="flex items-start gap-4 mt-6">
                <p className="relative z-[1] top-[0px] left-[980px] text-black text-[20px] font-extrabold font-['Noto_Serif_Bengali']">সুচিত্রা_ভট্টাচার্য</p>
                <iframe
                  src="https://drive.google.com/file/d/1mTnS5U97CJpqKeHD9MnJ31SNrpu2pa6_/view?usp=sharing"
                  className="w-[40vw] h-[80vh] relative top-[-50px] left-[-180px]"
                  style={{ border: "none" }}
                  title="কাঠগোলাপ PDF"
                />
                <h2 className="relative z-[1] top-[70px] left-[20px] text-black text-[20px] font-extrabold font-['copperplate']">part_1</h2>
                <iframe
                  src="https://www.youtube.com/embed/TpXPMViLbo8?si=i_vmROMa7LboFpYO" title="YouTube video player"
                  className="w-[40vw] h-[40vh] relative top-[100px] left-[-80px]"
                  style={{ border: "none" }}
                  allowFullScreen
                />
                <h1 className="relative z-[1] top-[500px] left-[-100px] text-black text-[15px] font-extrabold font-['Noto_Serif_Bengali">will be updated soon...</h1>
              </div>
            </div>
          )}



          {showPdf6 && (
            <div className="fixed inset-0 z-[10] bg-white/95 p-4">
              <button
                className="text-white bg-red-600 text-xl m-10 p-10 cursor-pointer w-[3vw] h-[6vh]"
                onClick={() => setShowPdf6(false)}
              >
                ✕

              </button>
              <h1 className="relative z-[1] top-[0px] left-[900px] text-black text-[50px] font-extrabold font-['Noto_Serif_Bengali']">
                পদ্মজা

              </h1>
              <div className="flex items-start gap-4 mt-6">
                <p className="relative z-[1] top-[0px] left-[980px] text-black text-[20px] font-extrabold font-['Noto_Serif_Bengali']">ইলমা_বেহরোজ</p>
                <iframe
                  src="https://drive.google.com/file/d/1Hb6xewPHEByb-zSGr0yPEKUYUpwUdrQ2/view?usp=sharing"
                  className="w-[40vw] h-[80vh] relative top-[-50px] left-[-180px]"
                  style={{ border: "none" }}
                  title="কাঠগোলাপ PDF"
                />
                <h2 className="relative z-[1] top-[70px] left-[20px] text-black text-[20px] font-extrabold font-['copperplate']">part_1</h2>
                <iframe
                  src="https://www.youtube.com/embed/8qyEFRdknYg?si=8Aen3D4qtGqyD-UF" title="YouTube video player"
                  className="w-[40vw] h-[40vh] relative top-[100px] left-[-80px]"
                  style={{ border: "none" }}
                  allowFullScreen
                />
                <h1 className="relative z-[1] top-[500px] left-[-100px] text-black text-[15px] font-extrabold font-['Noto_Serif_Bengali">will be updated soon...</h1>
              </div>
            </div>
          )}




          {showPdf7 && (
            <div className="fixed inset-0 z-[10] bg-white/95 p-4">
              <button
                className="text-white bg-red-600 text-xl m-10 p-10 cursor-pointer w-[3vw] h-[6vh]"
                onClick={() => setShowPdf7(false)}
              >
                ✕

              </button>
              <h1 className="relative z-[1] top-[0px] left-[900px] text-black text-[50px] font-extrabold font-['Noto_Serif_Bengali']">
                তোমাকে

              </h1>
              <div className="flex items-start gap-4 mt-6">
                <p className="relative z-[1] top-[0px] left-[980px] text-black text-[20px] font-extrabold font-['Noto_Serif_Bengali']">হুমায়ুন_আহমেদ</p>
                <iframe
                  src="https://drive.google.com/file/d/1m0CtWWI027vfXXsM61UObekzH9TGqt76/view?usp=sharing"
                  className="w-[40vw] h-[80vh] relative top-[-50px] left-[-180px]"
                  style={{ border: "none" }}
                  title="কাঠগোলাপ PDF"
                />
                <h2 className="relative z-[1] top-[70px] left-[20px] text-black text-[20px] font-extrabold font-['copperplate']">part_1</h2>
                <iframe
                  src="https://www.youtube.com/embed/zUEUO1Paezc?si=kqvwGgcjsNGMXAC-" title="YouTube video player"
                  className="w-[40vw] h-[40vh] relative top-[100px] left-[-80px]"
                  style={{ border: "none" }}
                  allowFullScreen
                />
                <h1 className="relative z-[1] top-[500px] left-[-100px] text-black text-[15px] font-extrabold font-['Noto_Serif_Bengali">will be updated soon...</h1>
              </div>
            </div>
          )}




          {showPdf8 && (
            <div className="fixed inset-0 z-[10] bg-white/95 p-4">
              <button
                className="text-white bg-red-600 text-xl m-10 p-10 cursor-pointer w-[3vw] h-[6vh]"
                onClick={() => setShowPdf8(false)}
              >
                ✕

              </button>
              <h1 className="relative z-[1] top-[0px] left-[900px] text-black text-[50px] font-extrabold font-['Noto_Serif_Bengali']">
                দেবদাস

              </h1>
              <div className="flex items-start gap-4 mt-6">
                <p className="relative z-[1] top-[0px] left-[980px] text-black text-[20px] font-extrabold font-['Noto_Serif_Bengali']">শরৎচন্দ্র_চট্টোপাধ্যায</p>
                <iframe
                  src="https://drive.google.com/file/d/14OMZ-4h-cR22cgNPItwyNZNkhtEuEQzw/view?usp=sharing"
                  className="w-[40vw] h-[80vh] relative top-[-50px] left-[-180px]"
                  style={{ border: "none" }}
                  title="কাঠগোলাপ PDF"
                />
                <h2 className="relative z-[1] top-[70px] left-[20px] text-black text-[20px] font-extrabold font-['copperplate']">part_1</h2>
                <iframe
                  src="https://www.youtube.com/embed/uPygFIzXCAc?si=aFdgoMl1H8sr7nK8" title="YouTube video player"
                  className="w-[40vw] h-[40vh] relative top-[100px] left-[-80px]"
                  style={{ border: "none" }}
                  allowFullScreen
                />
                <h1 className="relative z-[1] top-[500px] left-[-100px] text-black text-[15px] font-extrabold font-['Noto_Serif_Bengali">will be updated soon...</h1>
              </div>
            </div>
          )}



          {showPdf9 && (
            <div className="fixed inset-0 z-[10] bg-white/95 p-4">
              <button
                className="text-white bg-red-600 text-xl m-10 p-10 cursor-pointer w-[3vw] h-[6vh]"
                onClick={() => setShowPdf9(false)}
              >
                ✕

              </button>
              <h1 className="relative z-[1] top-[0px] left-[900px] text-black text-[50px] font-extrabold font-['Noto_Serif_Bengali']">
                Atomic Habits

              </h1>
              <div className="flex items-start gap-4 mt-6">
                <p className="relative z-[1] top-[0px] left-[980px] text-black text-[20px] font-extrabold font-['copperplate']">James_Clear</p>
                <iframe
                  src="https://share.google/H1dwduWAZEdeouzP8"
                  className="w-[40vw] h-[80vh] relative top-[-50px] left-[-180px]"
                  style={{ border: "none" }}
                  title="কাঠগোলাপ PDF"
                />
                <h2 className="relative z-[1] top-[70px] left-[20px] text-black text-[20px] font-extrabold font-['copperplate']">part_1</h2>
                <iframe
                  src="https://www.youtube.com/embed/6Ov3GJrgJUE?si=urd2oA463MmCz9AG" title="YouTube video player"
                  className="w-[40vw] h-[40vh] relative top-[100px] left-[-80px]"
                  style={{ border: "none" }}
                  allowFullScreen
                />
                <h1 className="relative z-[1] top-[500px] left-[-100px] text-black text-[15px] font-extrabold font-['Noto_Serif_Bengali">will be updated soon...</h1>
              </div>
            </div>
          )}



          {showPdf10 && (
            <div className="fixed inset-0 z-[10] bg-white/95 p-4">
              <button
                className="text-white bg-red-600 text-xl m-10 p-10 cursor-pointer w-[3vw] h-[6vh]"
                onClick={() => setShowPdf10(false)}
              >
                ✕

              </button>
              <h1 className="relative z-[1] top-[0px] left-[900px] text-black text-[50px] font-extrabold font-['copperplate']">
                Rich Dad Poor Dad

              </h1>
              <div className="flex items-start gap-4 mt-6">
                <p className="relative z-[1] top-[0px] left-[980px] text-black text-[20px] font-extrabold font-['copperplate']">Robert_Kiyosaki</p>
                <iframe
                  src="https://share.google/HpG8XGJ5opbB3B46L"
                  className="w-[40vw] h-[80vh] relative top-[-50px] left-[-180px]"
                  style={{ border: "none" }}
                  title="কাঠগোলাপ PDF"
                />
                <h2 className="relative z-[1] top-[70px] left-[20px] text-black text-[20px] font-extrabold font-['copperplate']">part_1</h2>
                <iframe
                  src="https://www.youtube.com/embed/nFvPuYuSQkg?si=6n388m_xhLRq3QWj" title="YouTube video player"
                  className="w-[40vw] h-[40vh] relative top-[100px] left-[-80px]"
                  style={{ border: "none" }}
                  allowFullScreen
                />
                <h1 className="relative z-[1] top-[500px] left-[-100px] text-black text-[15px] font-extrabold font-['Noto_Serif_Bengali">will be updated soon...</h1>
              </div>
            </div>
          )}


          {showPdf11 && (
            <div className="fixed inset-0 z-[10] bg-white/95 p-4">
              <button
                className="text-white bg-red-600 text-xl m-10 p-10 cursor-pointer w-[3vw] h-[6vh]"
                onClick={() => setShowPdf11(false)}
              >
                ✕

              </button>
              <h1 className="relative z-[1] top-[0px] left-[750px] text-black text-[40px] font-extrabold font-['copperplate']">
                The power of Your  Subconcious <br /> Mind

              </h1>
              <div className="flex items-start gap-4 mt-6">
                <p className="relative z-[1] top-[0px] left-[980px] text-black text-[20px] font-extrabold font-['copperplate']">joseph_murphy</p>
                <iframe
                  src="https://share.google/1VjcXjHwJ6wUia6TU"
                  className="w-[40vw] h-[80vh] relative top-[-50px] left-[-180px]"
                  style={{ border: "none" }}
                  title="কাঠগোলাপ PDF"
                />
                <h2 className="relative z-[1] top-[70px] left-[20px] text-black text-[20px] font-extrabold font-['copperplate']">part_1</h2>
                <iframe
                  src="https://www.youtube.com/embed/TgrEuKGDKpc?si=PRzQf5xvJY14tCSk" title="YouTube video player"
                  className="w-[40vw] h-[40vh] relative top-[100px] left-[-80px]"
                  style={{ border: "none" }}
                  allowFullScreen
                />
                <h1 className="relative z-[1] top-[500px] left-[-100px] text-black text-[15px] font-extrabold font-['Noto_Serif_Bengali">will be updated soon...</h1>
              </div>
            </div>
          )}



          {showPdf12 && (
            <div className="fixed inset-0 z-[10] bg-white/95 p-4">
              <button
                className="text-white bg-red-600 text-xl m-10 p-10 cursor-pointer w-[3vw] h-[6vh]"
                onClick={() => setShowPdf12(false)}
              >
                ✕

              </button>
              <h1 className="relative z-[1] top-[0px] left-[900px] text-black text-[50px] font-extrabold font-['copperplate']">
                The Psychology of <br /> Money

              </h1>
              <div className="flex items-start gap-4 mt-6">
                <p className="relative z-[1] top-[0px] left-[980px] text-black text-[20px] font-extrabold font-['copperplate']">Morgan_Housel</p>
                <iframe
                  src="https://share.google/PKRzJ38jJN0J7I1hC"
                  className="w-[40vw] h-[80vh] relative top-[-80px] left-[-180px]"
                  style={{ border: "none" }}
                  title="কাঠগোলাপ PDF"
                />
                <h2 className="relative z-[1] top-[70px] left-[20px] text-black text-[20px] font-extrabold font-['copperplate']">part_1</h2>
                <iframe
                  src="https://www.youtube.com/embed/GrleebzYOl8?si=DOsZDxW5jWnjd3z4" title="YouTube video player"
                  className="w-[40vw] h-[40vh] relative top-[100px] left-[-80px]"
                  style={{ border: "none" }}
                  allowFullScreen
                />
                <h1 className="relative z-[1] top-[500px] left-[-100px] text-black text-[15px] font-extrabold font-['Noto_Serif_Bengali">will be updated soon...</h1>
              </div>
            </div>
          )}



          {showPdf13 && (
            <div className="fixed inset-0 z-[10] bg-white/95 p-4">
              <button
                className="text-white bg-red-600 text-xl m-10 p-10 cursor-pointer w-[3vw] h-[6vh]"
                onClick={() => setShowPdf13(false)}
              >
                ✕

              </button>
              <h1 className="relative z-[1] top-[0px] left-[900px] text-black text-[50px] font-extrabold font-['copperplate']">
                The art of letting go

              </h1>
              <div className="flex items-start gap-4 mt-6">
                <p className="relative z-[1] top-[0px] left-[980px] text-black text-[20px] font-extrabold font-['copperplate']">Nick_Trenton</p>
                <iframe
                  src="https://share.google/hiWl36ZjjTSa4wBo5"
                  className="w-[40vw] h-[80vh] relative top-[-50px] left-[-180px]"
                  style={{ border: "none" }}
                  title="কাঠগোলাপ PDF"
                />
                <h2 className="relative z-[1] top-[70px] left-[20px] text-black text-[20px] font-extrabold font-['copperplate']">part_1</h2>
                <iframe
                  src="https://www.youtube.com/embed/A8ZxeX6Vq_E?si=FfkC1S9dshwNZXHY" title="YouTube video player"
                  className="w-[40vw] h-[40vh] relative top-[100px] left-[-80px]"
                  style={{ border: "none" }}
                  allowFullScreen
                />
                <h1 className="relative z-[1] top-[500px] left-[-100px] text-black text-[15px] font-extrabold font-['Noto_Serif_Bengali">will be updated soon...</h1>
              </div>
            </div>
          )}

          {showPdf14 && (
            <div className="fixed inset-0 z-[10] bg-white/95 p-4">
              <button
                className="text-white bg-red-600 text-xl m-10 p-10 cursor-pointer w-[3vw] h-[6vh]"
                onClick={() => setShowPdf14(false)}
              >
                ✕

              </button>
              <h1 className="relative z-[1] top-[0px] left-[900px] text-black text-[50px] font-extrabold font-['copperplate']">
                The boy In Pajamas

              </h1>
              <div className="flex items-start gap-4 mt-6">
                <p className="relative z-[1] top-[0px] left-[980px] text-black text-[20px] font-extrabold font-['copperplate']">Vera_Fermiga</p>
                <iframe
                  src="https://drive.google.com/file/d/1alNrnZ2Zf8SjMG88cOXJWs1uh5gS1o_Z/view?usp=sharing"
                  className="w-[40vw] h-[80vh] relative top-[-50px] left-[-180px]"
                  style={{ border: "none" }}
                  title="কাঠগোলাপ PDF"
                />
                <h2 className="relative z-[1] top-[70px] left-[20px] text-black text-[20px] font-extrabold font-['copperplate']">part_1</h2>
                <iframe
                  src="https://www.youtube.com/embed/Y57jWkUL4yg?si=Y9rVzUn99gZ3BrT0" title="YouTube video player"
                  className="w-[40vw] h-[40vh] relative top-[100px] left-[-80px]"
                  style={{ border: "none" }}
                  allowFullScreen
                />
                <h1 className="relative z-[1] top-[500px] left-[-100px] text-black text-[15px] font-extrabold font-['Noto_Serif_Bengali">will be updated soon...</h1>
              </div>
            </div>
          )}



          {showPdf15 && (
            <div className="fixed inset-0 z-[10] bg-white/95 p-4">
              <button
                className="text-white bg-red-600 text-xl m-10 p-10 cursor-pointer w-[3vw] h-[6vh]"
                onClick={() => setShowPdf15(false)}
              >
                ✕

              </button>
              <h1 className="relative z-[1] top-[0px] left-[900px] text-black text-[50px] font-extrabold font-['Noto_Serif_Bengali']">
                The Da Vinci Code

              </h1>
              <div className="flex items-start gap-4 mt-6">
                <p className="relative z-[1] top-[0px] left-[980px] text-black text-[20px] font-extrabold font-['Noto_Serif_Bengali']">Dan Brown</p>
                <iframe
                  src="https://dn790007.ca.archive.org/0/items/TheDaVinciCode_201308/The%20Da%20Vinci%20Code.pdf"
                  className="w-[40vw] h-[80vh] relative top-[-50px] left-[-180px]"
                  style={{ border: "none" }}
                  title="কাঠগোলাপ PDF"
                />
                <h2 className="relative z-[1] top-[70px] left-[20px] text-black text-[20px] font-extrabold font-['copperplate']">part_1</h2>
                <iframe
                  src="https://www.youtube.com/embed/C2U0H61gP6s?si=El33L59Qt8YfYIn_" title="YouTube video player"
                  className="w-[40vw] h-[40vh] relative top-[100px] left-[-80px]"
                  style={{ border: "none" }}
                  allowFullScreen
                />
                <h1 className="relative z-[1] top-[500px] left-[-100px] text-black text-[15px] font-extrabold font-['Noto_Serif_Bengali">will be updated soon...</h1>
              </div>
            </div>
          )}



          {showPdf16 && (
            <div className="fixed inset-0 z-[10] bg-white/95 p-4">
              <button
                className="text-white bg-red-600 text-xl m-10 p-10 cursor-pointer w-[3vw] h-[6vh]"
                onClick={() => setShowPdf16(false)}
              >
                ✕

              </button>
              <h1 className="relative z-[1] top-[0px] left-[900px] text-black text-[50px] font-extrabold font-['Noto_Serif_Bengali']">
                Pride and Prejudice
              </h1>
              <div className="flex items-start gap-4 mt-6">
                <p className="relative z-[1] top-[0px] left-[980px] text-black text-[20px] font-extrabold font-['Noto_Serif_Bengali']">Jane Austen
                </p>
                <iframe
                  src="https://dn790002.ca.archive.org/0/items/prideprejudice00aust/prideprejudice00aust.pdf"
                  className="w-[40vw] h-[80vh] relative top-[-50px] left-[-180px]"
                  style={{ border: "none" }}
                  title="কাঠগোলাপ PDF"
                />
                <h2 className="relative z-[1] top-[70px] left-[20px] text-black text-[20px] font-extrabold font-['copperplate']">part_1</h2>
                <iframe
                  src="https://www.youtube.com/embed/2MYH7lSnWUI?si=we86GJSVoRzZcRQY" title="YouTube video player" title="YouTube video player"
                  className="w-[40vw] h-[40vh] relative top-[100px] left-[-80px]"
                  style={{ border: "none" }}
                  allowFullScreen
                />
                <h1 className="relative z-[1] top-[500px] left-[-100px] text-black text-[15px] font-extrabold font-['Noto_Serif_Bengali">will be updated soon...</h1>
              </div>
            </div>
          )}


        </div >
      </>
      )
}

      export default App
