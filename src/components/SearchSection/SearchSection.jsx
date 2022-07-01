import React, { useRef } from 'react';
import SearchIcon from '../../assets/icons/search-icon.svg'
import { useGetCategoriesQuery } from '../../redux/ProductsApi';
import style from './SearchSection.module.scss'


const SearchSection = ({dependencies}) => {
    const { setCategory, setName } = dependencies
    const inpRef = useRef()

    const {data = []} = useGetCategoriesQuery()

    return (
        <section className={style.search}>
            <div className='container'>
                <h2 className={style.search__title}>Search</h2>
                <div className={style.search__block}>
                    <label className={style.search__label}>
                        <input type="search" className={style.search__inp} ref={inpRef} />
                        <button onClick={() => setName(inpRef.current.value)} className={style.search__btn}>
                            <img src={SearchIcon} alt="search icon" />
                        </button>
                    </label>
                    <select 
                        className={style.search__select + ' form-select form-select-lg mb-3'}
                        onChange={(event) => { setName(''); setCategory(event.target.value)}}
                        aria-label=".form-select-lg example"
                    >
                            <option value=''>All categories</option>
                            {
                                data?.map((ctg, index) => <option value={ctg} key={index}>{ctg}</option>)
                            }
                    </select>
                </div>
            </div>
        </section>
    );
}

export default SearchSection;
