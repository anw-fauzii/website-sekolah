import React from "react"
import { Head, Link } from "@inertiajs/react"
import Footer from "@/Components/compWeb/Footer"
import Testimoni from "@/Components/compWeb/Testimoni"
import Blog from "@/Components/compWeb/Blog"
import SelamatDatang from "@/Components/compWeb/SelamatDatang"
import Navbar from "@/Components/compWeb/Navbar"
export default function Homepage(props) {
    return (
        <div>
            <Navbar />
            <div className="mt-20 md:mt-16 pb-4 bg-cyan-500">
                <img src="https://ppdb.jabarprov.go.id/images/banner2023v2.jpg" alt="" />
            </div>

            <div className="flex bg-gradient-to-b from-cyan-500 to-yellow-400 justify-center">
                <div className="flex justify-between mx-10 max-sm:mx-2 items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-2/3">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1" />
                        </svg>

                        <h className="mb-2 lg:text-2xl md:text-lg font-bold tracking-tight text-gray-900 dark:text-white">Jadilah Generasi Berakhlak Mulia dan Berprestasi</h>
                    </div>
                    <div className="flex flex-row justify-center lg:mr-5 md:mr-10">
                        <img className="hidden md:block lg:w-24 lg:h-24 md:w-16 md:h-16 rounded-t-lg md:rounded-l-lg" src="https://sip.primainsanigarut.sch.id/css_login/images/img-01.png" alt="" />
                        <img className="hidden md:block lg:w-24 lg:h-24 md:w-16 md:h-16 rounded-t-lg md:rounded-l-lg" src="https://ppdb.primainsani.sch.id/media/source/logo_sd_tv_gis_2020.png" alt="" />
                        <img className="hidden md:block lg:w-24 lg:h-24 md:w-16 md:h-16 rounded-t-lg md:rounded-l-lg" src="https://ppdb.primainsani.sch.id/media/source/logo_tk_tv.png" alt="" />
                    </div>
                </div>
            </div>

            <SelamatDatang />
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#facc15" fillOpacity="1" d="M0,128L48,128C96,128,192,128,288,117.3C384,107,480,85,576,96C672,107,768,149,864,165.3C960,181,1056,171,1152,160C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>

            <section className="bg-white dark:bg-gray-900 lg:-mt-44">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Mengapa Prima Insani?</h2>
                        <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                        <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                    </div>
                </div>
            </section>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#facc15" fill-opacity="1" d="M0,160L60,165.3C120,171,240,181,360,192C480,203,600,213,720,213.3C840,213,960,203,1080,176C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
            <section className="bg-yellow-400 dark:bg-gray-900">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">

                    <iframe className=" h-full w-full rounded-lg" src="https://www.youtube.com/embed/bR02B1LFUfI" frameBorder="0" allowFullScreen></iframe>


                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Sekilas Yayasan Prima Insani</h2>
                        <p className="mb-6 font-light text-justify text-gray-500 md:text-lg dark:text-gray-400">Yayasan Prima Insani diprakarsai oleh Bapak H. Ato Hermanto dan diketuai oleh Ibu Dra. Hj. Lilis Rostina yang didirikan pada tanggal 28 September 2002 yang bergerak di bidang pendidikan dalam rangka ikut mensukseskan program pemerintah dalam mencerdaskan kehidupan bangsa, dengan memberikan layanan pendidikan terbaik bagi anak usia dini dan anak usia sekolah dasar.<br />
                            Yayasan Prima Insani dengan nomor izin Kemenkunham Nomor AHU-0021323.AH.01.04.Tahun 2015 Memiliki jenjang pendidikan PG-TK dan SD Garut Islamic School yang beralamat di jalan Ciledug nomor 281 dan 283 Kecamatan Garut Kota Kabupaten Garut.</p>
                        <a href="#" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                            Get started
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </section>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#facc15" fill-opacity="1" d="M0,32L48,53.3C96,75,192,117,288,112C384,107,480,53,576,42.7C672,32,768,64,864,90.7C960,117,1056,139,1152,128C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>

            <Blog />
            <Testimoni />
            <Footer />
            <div data-dial-init className="fixed end-6 bottom-6 group">
                <a href="#" className="flex items-center justify-center text-white bg-blue-700 rounded-lg w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4" />
                    </svg>
                </a>
            </div>
        </div >
    )
}