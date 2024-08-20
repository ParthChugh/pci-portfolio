import localFont from 'next/font/local'

export const poppins = localFont({
    src: [
      {
        path: "./UniviaPro-Regular.woff2",
        weight: "400",
        style: "normal",
      },
      {
        path: "./UniviaPro-Italic.woff2",
        weight: "400",
        style: "italic",
      },
      {
        path: "./UniviaPro-Bold.woff2",
        weight: "700",
        style: "normal",
      },
      {
        path: "./UniviaPro-BoldItalic.woff2",
        weight: "700",
        style: "italic",
      },
    ],
  });

// export const poppins = Poppins({
//     subsets: ['latin'],
//     weight: ['300', '400', '500', '600', '700', '800', '900']
// })

export const montserrat = poppins


export const abhaya_libreh = poppins

export const inter = poppins