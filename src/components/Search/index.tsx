'use client'

import { SetStateAction, useState } from 'react';
import { InputText } from '../InputText';
import styles from './search.module.css';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export const Search = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const [getSearch, setSearch] = useState("");

  const handleSearching = () => {
    const params = new URLSearchParams(searchParams);
    params.set("query", getSearch);

    if (!getSearch) {
      params.delete('query');
    }

    replace(`${pathName}?${params.toString()}`)
  };

  return (
    <div className={styles.search}>
      <InputText
        id="search"
        name="inputSearch"
        placeholder="Digite o que você procura"
        type="text"
        required={false}
        value={getSearch}
        onChange={(event: { target: { value: SetStateAction<string> } }) =>
          setSearch(event.target.value)
        }
      />
      <button type="button" onClick={handleSearching}>
        Buscar
      </button>
    </div>
  );
};
