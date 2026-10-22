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
          <h1 className="relative text-white z-[1] text-[30px] top-[58vh] left-[50px] font-['Noto_Serif_Bengali'] font-extrabold">বাংলা উপন্যাস
            বই:</h1>
          <div className='cards'>

            <div className="book-set">

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book1" desc="book1 desc">
                <a href="https://drive.google.com/file/d/122w7GDN5jLkmmo0re2SaYVdDQY8S2hiG/preview"> <img className='i1 h-74.5 w-70' src="https://i.pinimg.com/736x/9e/8a/88/9e8a88e794dfde56456d65ebc54316a6.jpg" alt="book1" /></a>
                <p className='relative z-[1] text-white  text-xl  font-extralight'>কাঠগোলাপ</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book2" desc="book2 desc">
                <img className='i2 h-74.5 w-70' src="https://i.pinimg.com/1200x/ed/12/ae/ed12ae2fcf26beeeb6f453836452132e.jpg" alt="" />

                <p className='relative z-[1] text-white text-xl   font-extralight'>অপেক্ষা</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book3" desc="book3 desc">
                <img className='i3 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1289975099i/9602495.jpg" alt="" />

                <p className='relative z-[1] text-white text-xl   font-extralight'>ফেলুদা সমগ্র ১</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh] ' title="book4" desc="book4 desc">
                <img className='i4 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1698947761i/670686.jpg" alt="" />
                <p className='relative z-[1] text-white text-xl   font-extralight'>শঙ্কু সমগ্র <br />Satyajit Ray</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book1" desc="book1 desc">
                <img className='i1 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1429515855i/2580306.jpg" alt="book1" />

                <p className='relative z-[1] text-white text-xl  font-extralight'>জোছনা ও জননীর গল্প</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="border border-white w-[200px] h-[300px] text-white relative top-[60vh]" desc="book2 desc">
                <img className='i2 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1363093925i/14759169.jpg" alt="" />

                <p className='relative z-[1] text-white text-xl  font-extralight'>শঙ্খনীল কারাগার</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book3" desc="book3 desc">
                <img className='i3 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1413112198i/12359970.jpg" alt="" />

                <p className='relative z-[1] text-white text-xl  font-extralight'>হিমু</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh] ' title="book4" desc="book4 desc">
                <img className='i4 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1362031027i/17412290.jpg" alt="" />
                <p className='relative z-[1] text-white text-xl  font-extralight '>দেয়াল</p>
              </div>

            </div>
            <div className="book-set" aria-hidden="true">

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book1" desc="book1 desc">
                <img className='i1 h-74.5 w-70' src="https://i.pinimg.com/736x/9e/8a/88/9e8a88e794dfde56456d65ebc54316a6.jpg" alt="book1" />

                <p className='relative z-[1] text-white  text-xl  font-extralight'>কাঠগোলাপ</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book2" desc="book2 desc">
                <img className='i2 h-74.5 w-70' src="https://i.pinimg.com/1200x/ed/12/ae/ed12ae2fcf26beeeb6f453836452132e.jpg" alt="" />

                <p className='relative z-[1] text-white text-xl   font-extralight'>অপেক্ষা</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book3" desc="book3 desc">
                <img className='i3 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1289975099i/9602495.jpg" alt="" />

                <p className='relative z-[1] text-white text-xl   font-extralight'>ফেলুদা সমগ্র ১</p>

              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh] ' title="book4" desc="book4 desc">
                <img className='i4 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1698947761i/670686.jpg" alt="" />
                <p className='relative z-[1] text-white text-xl   font-extralight'>শঙ্কু সমগ্র <br />Satyajit Ray</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book1" desc="book1 desc">
                <img className='i1 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1429515855i/2580306.jpg" alt="book1" />

                <p className='relative z-[1] text-white text-xl  font-extralight'>কাঠগোলাপ</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="border border-white w-[200px] h-[300px] text-white relative top-[60vh]" desc="book2 desc">
                <img className='i2 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1363093925i/14759169.jpg" alt="" />
                <p className='relative z-[1] text-white text-xl  font-extralight'>অপেক্ষা</p>
              </div>


              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh]' title="book3" desc="book3 desc">
                <img className='i3 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1413112198i/12359970.jpg" alt="" />

                <p className='relative z-[1] text-white text-xl  font-extralight'>ফেলুদা সমগ্র ১</p>
              </div>

              <div className='border border-white w-[200px] h-[300px] text-white relative top-[60vh] ' title="book4" desc="book4 desc">
                <img className='i4 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1362031027i/17412290.jpg" alt="" />
                <p className='relative z-[1] text-white text-xl  font-extralight '>শঙ্কু সমগ্র <br />Satyajit Ray</p>
              </div>

            </div>
          </div>





          <div className="slide">
            <h1 className="relative text-white z-[1] text-[30px] top-[88vh] left-[50px] font-['Noto_Serif_Bengali'] font-bold">Books For Engineering Students:</h1>
            <div className='cards2'>
              <div className="book-set2">

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book1" desc="book1 desc">
                  <img className='i1 h-74.5 w-70' src="https://m.media-amazon.com/images/I/41Lazf3TXIL._SX342_SY445_FMwebp_.jpg" alt="book1" />

                  <p className='relative z-[1] text-white  text-xl  font-extralight'>AI Engineering</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book2" desc="book2 desc">
                  <img className='i2 h-74.5 w-70' src="https://m.media-amazon.com/images/I/51xiwRkS2oL._SY522_.jpg" alt="" />

                  <p className='relative z-[1] text-white text-xl   font-extralight'>Programming with Java</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book3" desc="book3 desc">
                  <img className='i3 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1289975099i/9602495.jpg" alt="" />

                  <p className='relative z-[1] text-white text-xl   font-extralight'>ফেলুদা সমগ্র ১</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh] ' title="book4" desc="book4 desc">
                  <img className='i4 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1698947761i/670686.jpg" alt="" />
                  <p className='relative z-[1] text-white text-xl   font-extralight'>শঙ্কু সমগ্র <br />Satyajit Ray</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book1" desc="book1 desc">
                  <img className='i1 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1429515855i/2580306.jpg" alt="book1" />

                  <p className='relative z-[1] text-white text-xl  font-extralight'>জোছনা ও জননীর গল্প</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="border border-white w-[200px] h-[300px] text-white relative top-[60vh]" desc="book2 desc">
                  <img className='i2 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1363093925i/14759169.jpg" alt="" />

                  <p className='relative z-[1] text-white text-xl  font-extralight'>শঙ্খনীল কারাগার</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book3" desc="book3 desc">
                  <img className='i3 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1413112198i/12359970.jpg" alt="" />

                  <p className='relative z-[1] text-white text-xl  font-extralight'>হিমু</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh] ' title="book4" desc="book4 desc">
                  <img className='i4 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1362031027i/17412290.jpg" alt="" />
                  <p className='relative z-[1] text-white text-xl  font-extralight '>দেয়াল</p>
                </div>

              </div>
              <div className="book-set2" aria-hidden="true">

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book1" desc="book1 desc">
                  <img className='i1 h-74.5 w-70' src="https://m.media-amazon.com/images/I/41Lazf3TXIL._SX342_SY445_FMwebp_.jpg" alt="book1" />

                  <p className='relative z-[1] text-white  text-xl  font-extralight'>AI Engineering</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book2" desc="book2 desc">
                  <img className='i2 h-74.5 w-70' src="https://m.media-amazon.com/images/I/51xiwRkS2oL._SY522_.jpg" alt="" />

                  <p className='relative z-[1] text-white text-xl   font-extralight'>Programming with Java </p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book3" desc="book3 desc">
                  <img className='i3 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1289975099i/9602495.jpg" alt="" />

                  <p className='relative z-[1] text-white text-xl   font-extralight'>ফেলুদা সমগ্র ১</p>

                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh] ' title="book4" desc="book4 desc">
                  <img className='i4 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1698947761i/670686.jpg" alt="" />
                  <p className='relative z-[1] text-white text-xl   font-extralight'>শঙ্কু সমগ্র <br />Satyajit Ray</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book1" desc="book1 desc">
                  <img className='i1 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1429515855i/2580306.jpg" alt="book1" />

                  <p className='relative z-[1] text-white text-xl  font-extralight'>কাঠগোলাপ</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="border border-white w-[200px] h-[300px] text-white relative top-[60vh]" desc="book2 desc">
                  <img className='i2 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1363093925i/14759169.jpg" alt="" />
                  <p className='relative z-[1] text-white text-xl  font-extralight'>অপেক্ষা</p>
                </div>


                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh]' title="book3" desc="book3 desc">
                  <img className='i3 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1413112198i/12359970.jpg" alt="" />

                  <p className='relative z-[1] text-white text-xl  font-extralight'>ফেলুদা সমগ্র ১</p>
                </div>

                <div className='border border-white w-[200px] h-[300px] text-white relative top-[90vh] ' title="book4" desc="book4 desc">
                  <img className='i4 h-74.5 w-70' src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1362031027i/17412290.jpg" alt="" />
                  <p className='relative z-[1] text-white text-xl  font-extralight '>শঙ্কু সমগ্র <br />Satyajit Ray</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
