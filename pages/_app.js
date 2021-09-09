import '../public/css/bootstrap.min.css';
import '../public/css/animate.min.css';
import '../public/css/boxicons.min.css';
import '../public/css/meanmenu.min.css';
import '../public/css/flaticon.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-tabs/style/react-tabs.css';
import 'react-image-lightbox/style.css';
import '../public/css/style.css';
import '../public/css/responsive.css';

import Layout from '../components/layout/Layout';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

// const MyApp = ({ Component, pageProps }) => {
//     return (
//         <p style={{ overflowX: 'hidden' }}>
//             Hell123456789abcdefghijklmopqrstuwxyz123456789abcdefghijklmopqrstuwxyz
//         </p>
//     );
// };

export default MyApp;
