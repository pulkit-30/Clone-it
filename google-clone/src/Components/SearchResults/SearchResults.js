import React from 'react';
import { useContext } from 'react';
import QueryContext from '../../Context/QueryContext';
import useGoogle from '../../Hooks/useGoogle';
import Classes from './Search.module.css';

function SearchResults() {
  const Context = useContext(QueryContext);
  const data = useGoogle();

  return (
    <div className={Classes.Result__body}>
      {data.data?.items.length === 0 && <div>Loading...</div>}
      {data.data?.items.length !== 0 && (
        <React.Fragment>
          <div className={Classes.Header__bottom}>
            About {data?.data?.searchInformation.formattedTotalResults} results
            ({data?.data?.searchInformation.formattedSearchTime}) for{' '}
            {Context.Term}
          </div>
          <div>
            {data.data?.items?.map((result, index) => {
              if (!result.pagemap.cse_image)
                return <React.Fragment key={index}></React.Fragment>;
              return (
                <div className={Classes.Results__box} key={index}>
                  <div className={Classes.Result__link}>
                    <h6>{result.displayLink}</h6>
                    <a href={result.link}>{result.title}</a>
                    <div className='flex'>
                      <p className={Classes.Result__para}>{result.snippet}</p>
                      <div>
                        <img
                          className={Classes.image}
                          src={result.pagemap.cse_image[0].src}
                          alt='image_'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default SearchResults;
