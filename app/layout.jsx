import '@styles/globals.css';
import NavbarM from '../components/NavbarMenu';
import Template from '../components/Template';

const RootLayout = ({ children }) => {
    return (
        <html lang="en"> {/* Добавление тега <html> */}
            <head>
                <title>My App</title>
            </head>
            <body> {/* Добавление тега <body> */}
                <div className='app'> {/* Использование <div> в качестве внешнего контейнера */}
                    <header className='header'>
                        {/* <NavbarM /> */}
                    </header>
                    <main style={{ position: 'relative' }}> {/* Применение стилей через атрибут style */}
                        <Template>{children}</Template>
                    </main>
                </div>
            </body>
        </html>
    );
}
export default RootLayout;
