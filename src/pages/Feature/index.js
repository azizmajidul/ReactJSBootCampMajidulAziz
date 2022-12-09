import Content from './fragments/content';
import Sidebar from './fragments/sidebar/sidebar';
import './styles.css';

function Feature() {
  let data = "Fitur-Fitur Aplikasi";

  return (
    <div>
      <section className='content-container'>
        <Content data={data} />
        <Sidebar></Sidebar>
      </section>
    </div>
  );
}

export default Feature;
