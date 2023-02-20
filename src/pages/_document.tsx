import {Html, Head, Main, NextScript} from 'next/document'

const MyDocument = () => {
    return (
        <Html>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com'/>
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin=''
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Abel&family=Architects+Daughter&family=Autour+One&display=swap'
                    rel='stylesheet'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='150x150'
                    href='/logo_150.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/logo_32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/logo_16.png'
                />
                <link rel='manifest' href='/site.webmanifest'/>
                <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5'/>
                <meta name='msapplication-TileColor' content='#d6d3d1'/>
                <meta name='theme-color' content='#d6d3d1'/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
export default MyDocument