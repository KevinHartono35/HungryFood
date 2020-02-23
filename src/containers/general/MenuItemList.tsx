import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {MenuItem} from '../../components/';
import {MenuListFooter} from '../../components/button/';

export interface MenuItemListResponse {
  menu_id: string;
  menu_name: string;
  base_price: number;
  discount_percentage: number;
}

export interface MenuItemListProps {
  limitPerPage?: number;
}

export interface MenuItemListActivity {
  loading: boolean;
  endPage: boolean;
}

export default function MenuItemList({limitPerPage = 2}: MenuItemListProps) {
  const [data, setData] = useState<MenuItemListResponse[]>([]);
  const [activity, setActivity] = useState<MenuItemListActivity>({
    loading: true,
    endPage: false,
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  async function fetchData() {
    setActivity({...activity, loading: true});

    try {
      const responses = getItemData(page, limitPerPage);

      if (responses.length < limitPerPage) {
        setActivity({loading: false, endPage: true});
      } else {
        setActivity({loading: false, endPage: false});
      }

      setData([...data, ...responses]);
    } catch (error) {}
  }

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <MenuItem
          menuID={item.menu_id}
          menuName={item.menu_name}
          discountPercentage={item.discount_percentage}
          basePrice={item.base_price}
        />
      )}
      keyExtractor={item => item.menu_id}
      ListFooterComponent={
        !activity.endPage ? (
          <MenuListFooter
            onPress={() => {
              if (!activity.loading) {
                setPage(page + 1);
              }
            }}
          />
        ) : (
          <></>
        )
      }
    />
  );
}

function getItemData(page: number, limitPerPage: number) {
  const minCount = (page - 1) * limitPerPage;
  const maxCount = page * limitPerPage - 1;
  const responses: MenuItemListResponse[] = [];

  for (
    let index = minCount;
    index < itemData.length && index <= maxCount;
    index++
  ) {
    responses.push(itemData[index]);
  }

  return responses;
}

const itemData: MenuItemListResponse[] = [
  {
    menu_id: '1',
    menu_name: 'Whopper',
    discount_percentage: 50,
    base_price: 43600,
  },
  {
    menu_id: '2',
    menu_name: 'Smack',
    discount_percentage: 50,
    base_price: 20000,
  },
  {
    menu_id: '3',
    menu_name: 'Lawless',
    discount_percentage: 50,
    base_price: 30000,
  },
  {
    menu_id: '4',
    menu_name: 'Walao',
    discount_percentage: 50,
    base_price: 90909,
  },
  {
    menu_id: '5',
    menu_name: 'Walao',
    discount_percentage: 50,
    base_price: 90909,
  },
  {
    menu_id: '6',
    menu_name: 'Walao',
    discount_percentage: 50,
    base_price: 90909,
  },
  {
    menu_id: '7',
    menu_name: 'Walao',
    discount_percentage: 50,
    base_price: 90909,
  },
  {
    menu_id: '8',
    menu_name: 'Walao',
    discount_percentage: 50,
    base_price: 90909,
  },
];
