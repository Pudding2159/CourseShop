import '@styles/globals.css';
import NavbarM from 'components/NavbarMenu'; 
import Main from "components/Main"; 
import About from "components/About"
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import Contact from 'components/Contact';

const RootLayout = ({ children }) => {
    return (
        <div className='app'> {/* Использование <div> в качестве внешнего контейнера */}
            <header className='header'>
                <NavbarM />
            </header>
            <main style={{ position: 'relative' }}> {/* Применение стилей через атрибут style */}
                {children}
            </main>
        </div>
    );
}
export default RootLayout;