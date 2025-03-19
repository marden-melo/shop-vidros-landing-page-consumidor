"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaSun,
  FaMoon,
  FaShoppingCart,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Botão de tema fixo */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-yellow-300 hover:bg-yellow-400 text-black shadow-lg transition-all duration-300 "
        aria-label="Alternar tema"
      >
        {isDarkTheme ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>

      {/* Hero Section (exemplo) */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/hero.png"
          alt="Promoção Dia do Consumidor - Desktop"
          fill
          className="hidden md:block object-cover"
          quality={100}
          priority
        />
        <Image
          src="/hero-mobile.png"
          alt="Promoção Dia do Consumidor - Mobile"
          fill
          className="block md:hidden object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-8 px-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center flex-wrap px-4">
            {[
              {
                href: "https://shopee.com.br/shop.vidros?categoryId=100636&entryPoint=ShopByPDP&itemId=20998089717",
                text: "Compre na Shopee",
                icon: <FaShoppingCart />,
              },
              {
                href: "https://www.mercadolivre.com.br/pagina/ecommerce_shopvidros",
                text: "Compre no Mercado Livre",
                icon: <FaShoppingCart />,
              },
              {
                href: "http://www.shopvidros.com",
                text: "shopvidros.com",
                icon: <FaShoppingCart />,
              },
              {
                href: "https://wa.me/5515996773636",
                text: "Peça pelo WhatsApp",
                icon: <FaWhatsapp />,
              },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="w-full sm:w-auto bg-yellow-300 hover:bg-yellow-400 hover:scale-110 text-black font-bold py-3 px-6 rounded-full shadow-2xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] border border-black/20 hover:border-black/40 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {link.icon} {link.text}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Promoção Section */}
      <section
        className={`py-12 md:py-16 ${
          isDarkTheme ? "bg-gray-800" : "bg-yellow-50"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/espelho1.png"
                alt="Espelho Convexo ShopVidros"
                width={1200}
                height={967}
                className="w-full h-auto rounded-lg -ml-8"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-yellow-300 text-center md:text-left">
                {"Promoção".split("").map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block animate-neon"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    {letter}
                  </span>
                ))}{" "}
                Especial Dia do Consumidor
              </h2>
              <p
                className={`text-base md:text-lg mb-6 text-center md:text-left ${
                  isDarkTheme ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Aproveite nossa oferta exclusiva em Espelhos Convexos da marca
                Vision! Garanta segurança e qualidade com{" "}
                <span className="font-bold text-yellow-400">
                  descontos imperdíveis
                </span>{" "}
                só até o Dia do Consumidor!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start flex-wrap">
                {[
                  {
                    href: "https://shopee.com.br/shop.vidros?categoryId=100636&entryPoint=ShopByPDP&itemId=20998089717",
                    text: "Compre na Shopee",
                    icon: <FaShoppingCart />,
                  },
                  {
                    href: "https://www.mercadolivre.com.br/pagina/ecommerce_shopvidros",
                    text: "Compre no Mercado Livre",
                    icon: <FaShoppingCart />,
                  },
                  {
                    href: "http://www.shopvidros.com",
                    text: "shopvidros.com",
                    icon: <FaShoppingCart />,
                  },
                  {
                    href: "https://wa.me/5515996773636",
                    text: "Peça pelo WhatsApp",
                    icon: <FaWhatsapp />,
                  },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    className="w-full sm:w-auto bg-yellow-300 hover:bg-yellow-400 hover:scale-105 text-black font-bold py-2.5 px-5 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    {link.icon} {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section
        className={`py-12 md:py-16 ${isDarkTheme ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-yellow-300">
            Benefícios dos Espelhos Convexos Vision
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Segurança",
                desc: "Ideal para trânsito e vigilância, oferecendo visibilidade total.",
              },
              {
                title: "Durabilidade",
                desc: "Feitos com materiais resistentes para longa vida útil.",
              },
              {
                title: "Qualidade Vision",
                desc: "Marca reconhecida por sua excelência no mercado.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-lg shadow-md ${
                  isDarkTheme ? "bg-gray-800" : "bg-yellow-100"
                }`}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-yellow-400">
                  {benefit.title}
                </h3>
                <p className={isDarkTheme ? "text-gray-300" : "text-gray-700"}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 md:mt-12 flex-wrap">
            {[
              {
                href: "https://shopee.com.br/shop.vidros?categoryId=100636&entryPoint=ShopByPDP&itemId=20998089717",
                text: "Compre na Shopee",
                icon: <FaShoppingCart />,
              },
              {
                href: "https://www.mercadolivre.com.br/pagina/ecommerce_shopvidros",
                text: "Compre no Mercado Livre",
                icon: <FaShoppingCart />,
              },
              {
                href: "http://www.shopvidros.com",
                text: "shopvidros.com",
                icon: <FaShoppingCart />,
              },
              {
                href: "https://wa.me/5515996773636",
                text: "Peça pelo WhatsApp",
                icon: <FaWhatsapp />,
              },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="w-full sm:w-auto bg-yellow-300 hover:bg-yellow-400 hover:scale-105 text-black font-bold py-2.5 px-5 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {link.icon} {link.text}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tamanhos Section */}
      <section
        className={`py-12 md:py-16 ${
          isDarkTheme ? "bg-gray-800" : "bg-yellow-50"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-yellow-300">
            Tamanhos Disponíveis na Shop Vidros
          </h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[40, 50, 60, 80].map((size) => (
              <div
                key={size}
                className={`flex flex-col items-center justify-center rounded-full shadow-md border ${
                  isDarkTheme
                    ? "bg-gray-700 border-gray-600"
                    : "bg-white border-yellow-200"
                } ${
                  size === 40
                    ? "w-20 h-20 md:w-28 md:h-28"
                    : size === 50
                    ? "w-24 h-24 md:w-36 md:h-36"
                    : size === 60
                    ? "w-32 h-32 md:w-44 md:h-44"
                    : "w-40 h-40 md:w-56 md:h-56"
                }`}
              >
                <p className="text-xl md:text-2xl font-bold text-yellow-300">
                  {size}cm
                </p>
                <p
                  className={`text-sm ${
                    isDarkTheme ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Diâmetro
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 md:mt-12 flex-wrap">
            {[
              {
                href: "https://shopee.com.br/shop.vidros?categoryId=100636&entryPoint=ShopByPDP&itemId=20998089717",
                text: "Compre na Shopee",
                icon: <FaShoppingCart />,
              },
              {
                href: "https://www.mercadolivre.com.br/pagina/ecommerce_shopvidros",
                text: "Compre no Mercado Livre",
                icon: <FaShoppingCart />,
              },
              {
                href: "http://www.shopvidros.com",
                text: "shopvidros.com",
                icon: <FaShoppingCart />,
              },
              {
                href: "https://wa.me/5515996773636",
                text: "Peça pelo WhatsApp",
                icon: <FaWhatsapp />,
              },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="w-full sm:w-auto bg-yellow-300 hover:bg-yellow-400 hover:scale-105 text-black font-bold py-2.5 px-5 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {link.icon} {link.text}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Nova Seção de Vídeo */}
      <section
        className={`py-12 md:py-16 ${isDarkTheme ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-yellow-300">
            Confira mais detalhes do espelho convexo
          </h2>
          <div className="flex justify-center">
            <div
              className={`relative w-full max-w-md rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 ${
                isDarkTheme ? "bg-gray-800" : "bg-yellow-100"
              }`}
            >
              <video
                src="/video-espelho.mp4"
                controls
                autoPlay
                muted
                loop
                className="w-full h-auto"
                style={{ aspectRatio: "9/16" }}
              />
              <div className="absolute inset-0 pointer-events-none border-4 border-yellow-400 rounded-xl" />
            </div>
          </div>
          <p
            className={`text-center mt-6 text-base md:text-lg ${
              isDarkTheme ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Confira a qualidade e funcionalidade dos nossos produtos!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 md:mt-12 flex-wrap">
            {[
              {
                href: "https://shopee.com.br/shop.vidros?categoryId=100636&entryPoint=ShopByPDP&itemId=20998089717",
                text: "Compre na Shopee",
                icon: <FaShoppingCart />,
              },
              {
                href: "https://www.mercadolivre.com.br/pagina/ecommerce_shopvidros",
                text: "Compre no Mercado Livre",
                icon: <FaShoppingCart />,
              },
              {
                href: "http://www.shopvidros.com",
                text: "shopvidros.com",
                icon: <FaShoppingCart />,
              },
              {
                href: "https://wa.me/5515996773636",
                text: "Peça pelo WhatsApp",
                icon: <FaWhatsapp />,
              },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="w-full sm:w-auto bg-yellow-300 hover:bg-yellow-400 hover:scale-105 text-black font-bold py-2.5 px-5 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {link.icon} {link.text}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Qualidade Section */}
      <section
        className={`py-12 md:py-16 ${isDarkTheme ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 -ml-6">
              <Image
                src="/embalagem1.png"
                alt="Embalagem Vision ShopVidros"
                width={800}
                height={800}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-300 text-center md:text-left">
                Qualidade Garantida pela Vision
              </h2>
              <p
                className={`text-base md:text-lg mb-6 text-center md:text-left ${
                  isDarkTheme ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Nossos espelhos convexos vêm na embalagem original Vision,
                sinônimo de confiança e excelência.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start flex-wrap">
                {[
                  {
                    href: "https://shopee.com.br/shop.vidros?categoryId=100636&entryPoint=ShopByPDP&itemId=20998089717",
                    text: "Compre na Shopee",
                    icon: <FaShoppingCart />,
                  },
                  {
                    href: "https://www.mercadolivre.com.br/pagina/ecommerce_shopvidros",
                    text: "Compre no Mercado Livre",
                    icon: <FaShoppingCart />,
                  },
                  {
                    href: "http://www.shopvidros.com",
                    text: "shopvidros.com",
                    icon: <FaShoppingCart />,
                  },
                  {
                    href: "https://wa.me/5515996773636",
                    text: "Peça pelo WhatsApp",
                    icon: <FaWhatsapp />,
                  },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    className="w-full sm:w-auto bg-yellow-300 hover:bg-yellow-400 hover:scale-105 text-black font-bold py-2.5 px-5 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    {link.icon} {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 ${
          isDarkTheme
            ? "bg-gray-800 text-white"
            : "bg-gradient-to-t from-yellow-400 to-yellow-300 text-gray-900"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Seção Desenvolvedor */}
            <div className="flex flex-col items-center md:items-start">
              <p className="text-sm md:text-base font-semibold mb-2">
                Desenvolvido por
              </p>
              <a
                href="http://www.discode.com.br"
                target="_blank"
                className={`${
                  isDarkTheme
                    ? "text-yellow-200 hover:text-white"
                    : "text-gray-900 hover:text-yellow-600"
                } text-base md:text-lg transition-colors duration-300`}
              >
                Discode Software House
              </a>
              <p className="text-xs md:text-sm mt-1 opacity-75">
                By Marden Melo
              </p>
            </div>

            {/* Seção Instagram */}
            <div className="flex flex-col items-center md:items-start">
              <p className="text-sm md:text-base font-semibold mb-2">
                Siga-nos
              </p>
              <div className="flex items-center gap-2">
                <FaInstagram
                  className={`${
                    isDarkTheme
                      ? "text-yellow-200 hover:text-white"
                      : "text-gray-900 hover:text-yellow-600"
                  } text-lg md:text-2xl transition-colors duration-300`}
                />
                <a
                  href="https://instagram.com/shopvidros_"
                  target="_blank"
                  className={`${
                    isDarkTheme
                      ? "text-yellow-200 hover:text-white"
                      : "text-gray-900 hover:text-yellow-600"
                  } text-base md:text-lg transition-colors duration-300`}
                >
                  @shopvidros_
                </a>
              </div>
            </div>

            {/* Seção Links de Compra */}
            <div className="flex flex-col items-center md:items-start">
              <p className="text-sm md:text-base font-semibold mb-2">
                Compre também em
              </p>
              <div className="flex flex-col items-center md:items-start gap-2">
                {[
                  {
                    href: "https://www.mercadolivre.com.br/pagina/ecommerce_shopvidros",
                    text: "Mercado Livre",
                    icon: <FaShoppingCart />,
                  },
                  {
                    href: "https://shopee.com.br/shop.vidros?categoryId=100636&entryPoint=ShopByPDP&itemId=20998089717",
                    text: "Shopee",
                    icon: <FaShoppingCart />,
                  },
                  {
                    href: "http://www.shopvidros.com",
                    text: "ShopVidros.com",
                    icon: <FaShoppingCart />,
                  },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    className={`flex items-center gap-2 ${
                      isDarkTheme
                        ? "text-yellow-200 hover:text-white"
                        : "text-gray-900 hover:text-yellow-600"
                    } text-base md:text-lg transition-colors duration-300`}
                  >
                    {link.icon}
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Linha Separadora e Créditos Finais */}
          <div className="mt-8 pt-8 border-t border-gray-600/30 text-center">
            <p className="text-xs md:text-sm opacity-75">
              © {new Date().getFullYear()} Shop Vidros. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
