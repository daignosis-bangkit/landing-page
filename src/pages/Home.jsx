import React from "react";

import ChatCard from "../components/ChatCard";

import "../assets/css/Home.css";

import ChatMockUp from "../assets/img/chat.png";

class Home extends React.Component {
  render() {
    return (
        <div className="container">
          <div className="section-one pb-5">
            <div className="row">
              <div className="col-md-7">
                <div className="intro">
                  <h1 className="title">
                    Keputusan Tepat<span className="text-primary">.</span> Satu
                    Sentuhan<span className="text-primary">.</span> Cepat
                    <span className="text-primary">.</span>
                  </h1>
                  <h5 className="text-secondary mb-3">
                    Dengan Daignosis, Kamu dapat menjawab pertanyaan-pertanyaan
                    tentang gejala yang Kamu alami dan menerima saran diagnosis
                    yang dapat dipercaya dalam hitungan detik.
                  </h5>
                  <a href="#fitur" className="btn rounded">Coba Sekarang</a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="intro">
                  <ChatCard />
                </div>
              </div>
            </div>
          </div>
          <div className="section-two mb-5" id="kenapa">
            <div className="row head rounded shadow-sm">
              <div className="col-md-4">
                <span>
                  <i className="bi bi-chat-left-dots text-primary"></i>{" "}
                  Konsultasi
                </span>
              </div>
              <div className="col-md-4">
                <span>
                  <i className="bi bi-lightning text-warning"></i> Cepat
                </span>
              </div>
              <div className="col-md-4">
                <span>
                  <i className="bi bi-percent text-primary"></i> Akurat
                </span>
              </div>
            </div>
            <div className="row body rounded shadow-sm">
              <div className="col-md-4">
                <span>
                  Konsultasikan keluhan dan gejala yang Anda alami pada aplikasi
                  Daignosis dan dapatkan hasil dari diagnosa segera.
                </span>
              </div>
              <div className="col-md-4">
                <span>
                  Hasil dari konsultasi anda dapatkan dengan cepat berkat
                  bantuan dari <i>Artificial Intelligence</i> (AI).
                </span>
              </div>
              <div className="col-md-4">
                <span>
                  Dengan bantuan <i>Artificial Intelligence</i> (AI) yang
                  dirancang khusus menghasilkan hasil diagnosa berakurasi
                  tinggi.
                </span>
              </div>
            </div>
          </div>
        <div className="section-three pt-5" id="fitur">
          <h2 className="title text-center">
            Cara Mudah Berkonsultasi, <u className="text-success"> Gratis</u>.
          </h2>
          <div className="row">
            <div className="col-md-5">
              <img src={ChatMockUp} alt="Daignosis App" />
            </div>
            <div className="col-md-7 pt-5">
              <div className="row steps">
                <div className="col-md-6 mb-5">
                  <div className="title number d-inline">1</div>
                  <h4 className="title d-inline">
                    Masuk ke dalam aplikasi Daignosis
                  </h4>
                  <span className="d-block mt-3">
                    Masuk ke dalam aplikasi Daignosis untuk dapat mencoba
                    berkonsultasi.
                  </span>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="title number d-inline">2</div>
                  <h4 className="title d-inline">
                    Masukkan keluhan dan gejala yang Kamu alami
                  </h4>
                  <span className="d-block mt-3">
                    Masukkan keluhan dan gejala yang Kamu alami secara detail
                    menggunakan bahasa Inggris. Namun, dapat menggunakan bahasa
                    Indonesia maupun Inggris.
                  </span>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="title number d-inline">3</div>
                  <h4 className="title d-inline">
                    Dapatkan jawaban dari keluhan Kamu dengan cepat
                  </h4>
                  <span className="d-block mt-3">
                    Kamu akan dapat hasil diagnosa dari{" "}
                    <i>Artifical Intelligence</i> (AI) secara cepat, dalam{" "}
                    <span className="text-primary">1 detik</span>.
                  </span>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="title number d-inline">#</div>
                  <h4 className="title d-inline">Coba sekarang</h4>
                  <span className="d-block mt-3">
                    Coba <i>prototype</i> aplikasi kami. Kamu bisa mengunduhnya{" "}
                    <a
                      className="text-primary"
                      href="https://storage.googleapis.com/lukaku_uploaded/apk/Daignosis.apk"
                      alt="Dapatkan Daignosis"
                      target="_blank"
                      rel="noreferrer"
                    >
                      disini
                    </a>
                    .
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
