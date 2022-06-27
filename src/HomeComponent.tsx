import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

type Materials = {
  createdTime: string,
  id: string,
  fields: {
    Deploy: boolean,
    Name: string,
    Text: string,
    Attachments?: any[],
    ID: number
  }
}[]

export function HomeComponent() {

  const [old, setOld] = useState<Materials | null>(null);
  const [news, setNews] = useState<Materials | null>(null);

  useEffect(() => {
    document.title = 'Честь и Слава'
    fetch('https://api.airtable.com/v0/appOUfEIThjJfxZ4q/Old?api_key=keyYi2iEDJGoFI90C&filterByFormula=(%7BDeploy%7D%20%3D1)')
      .then(async (r) => {
        let res = await r.json()
        console.log(res.records, 'res');
        setOld(res.records)
      })
      .catch((e) => console.warn(e))
    fetch('https://api.airtable.com/v0/appOUfEIThjJfxZ4q/New?api_key=keyYi2iEDJGoFI90C&filterByFormula=(%7BDeploy%7D%20%3D1)')
      .then(async (r) => {
        let res = await r.json()
        console.log(res.records, 'res');
        setNews(res.records)
      })
      .catch((e) => console.warn(e))
  }, [])


  return (
    <>
      <section className={`advantages ${!old ? 'loading' : ''}`}>
        <div className="container">
          <div className="advantages__title title">
            АВАНГАРД
          </div>
          {old && <div style={{ display: 'flex', justifyContent: 'center', gap: ' 20px', flexWrap: 'wrap' }}>
            {old.map((e) => {
              console.log(e.fields.Attachments);
              return (
                <Link to={`/old/${e.id}`}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {!e.fields.Attachments &&
                      <div style={{
                        width: '300px',
                        height: '300px',
                        backgroundColor: '#000',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff'
                      }}>
                        НЕТ ИЗОБРАЖЕНИЯ
                      </div>}
                    {e.fields.Attachments && <img src={e.fields.Attachments[0].thumbnails.large.url} alt="" style={{ border: '3px solid #000', width: '300px', height: '300px',objectFit:'cover' }} />}
                    <span style={{ marginTop: '20px', fontSize: '25px' }}>{e.fields.Name}</span>
                  </div>
                </Link>
              )
            })}
          </div>}
          {!old && <span style={{ fontSize: '25px' }}>ЗАГРУЗКА...</span>}
        </div>
      </section>
      <section className={`advantages noAfter ${!old ? 'loading' : ''}`}>
        <div className="container">
          <div className="advantages__title title" style={{ color: '#fff' }}>
            НАШИ СОВРЕМЕННИЦЫ
          </div>
          {news && <div style={{ display: 'flex', justifyContent: 'center' }}>
            {news.map((e) => {
              return (
                <Link to={`/new/${e.id}`}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {!e.fields.Attachments &&
                      <div style={{
                        width: '300px',
                        height: '300px',
                        backgroundColor: '#000',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff'
                      }}>
                        НЕТ ИЗОБРАЖЕНИЯ
                      </div>}
                      {e.fields.Attachments && <img src={e.fields.Attachments[0].thumbnails.large.url} alt="" style={{ border: '3px solid #000', width: '300px', height: '300px',objectFit:'cover' }} />}
                    <span style={{ marginTop: '20px', fontSize: '25px' }}>{e.fields.Name}</span>
                  </div>
                </Link>
              )
            })}
          </div>}
          {!news && <span style={{ fontSize: '25px' }}>ЗАГРУЗКА...</span>}
        </div>
      </section>
    </>
  );
}

