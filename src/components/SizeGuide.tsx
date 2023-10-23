import React from 'react'
import { IProduct } from '../types/types'
import { useDispatch } from 'react-redux'
import { toggleVisiblility } from '../store/sizeGuideSlice'

interface SizeGuideProps {
    product: IProduct,
}

function SizeGuide({ product }: SizeGuideProps) {

    const dispatch = useDispatch()

    return (
        <div className='sizeGuideContainer' onClick={() => dispatch(toggleVisiblility())} >
            <div className='sizeGuideContent' onClick={(e) => e.stopPropagation()}>
                <h1>Size Guide</h1>
                <button className='sizeGuideCloseBtn' onClick={() =>  dispatch(toggleVisiblility())} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                {product.categorie === 'Shoes' &&
                    <table className="sizeChartTable">
                        <thead>
                            <tr>
                                <th>US</th>
                                <th>UK</th>
                                <th>EUR</th>
                                <th>RUS</th>
                                <th>CM</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>4</td>
                                <td>3.5</td>
                                <td>36</td>
                                <td>35</td>
                                <td>22</td>
                            </tr>
                            <tr>
                                <td>4.5</td>
                                <td>4</td>
                                <td>37</td>
                                <td>36</td>
                                <td>22.5</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>4.5</td>
                                <td>37.5</td>
                                <td>36.5</td>
                                <td>23</td>
                            </tr>
                            <tr>
                                <td>5.5</td>
                                <td>5</td>
                                <td>38</td>
                                <td>37</td>
                                <td>23.5</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>5.5</td>
                                <td>38.5</td>
                                <td>37.5</td>
                                <td>24</td>
                            </tr>
                            <tr>
                                <td>6.5</td>
                                <td>6</td>
                                <td>39.5</td>
                                <td>38.5</td>
                                <td>24.5</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>6.5</td>
                                <td>40</td>
                                <td>39</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td>7.5</td>
                                <td>7</td>
                                <td>40.5</td>
                                <td>39.5</td>
                                <td>25.5</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>7.5</td>
                                <td>41.5</td>
                                <td>40.5</td>
                                <td>26</td>
                            </tr>
                            <tr>
                                <td>8.5</td>
                                <td>8</td>
                                <td>42</td>
                                <td>41</td>
                                <td>26.5</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>8.5</td>
                                <td>42.5</td>
                                <td>41.5</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>9.5</td>
                                <td>9</td>
                                <td>43</td>
                                <td>42</td>
                                <td>27.5</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>9.5</td>
                                <td>44</td>
                                <td>43</td>
                                <td>28</td>
                            </tr>
                            <tr>
                                <td>10.5</td>
                                <td>10</td>
                                <td>44.5</td>
                                <td>43.5</td>
                                <td>28.5</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>10.5</td>
                                <td>45</td>
                                <td>44</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>11.5</td>
                                <td>11</td>
                                <td>45.5</td>
                                <td>44.5</td>
                                <td>29.5</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>11.5</td>
                                <td>46.5</td>
                                <td>45.5</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>12.5</td>
                                <td>12</td>
                                <td>47</td>
                                <td>46</td>
                                <td>30.5</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>12.5</td>
                                <td>47.5</td>
                                <td>46.5</td>
                                <td>31</td>
                            </tr>
                        </tbody>
                    </table>
                }

                {product.categorie === 'Clothes' &&
                    <table className={'sizeChartTable' + ' clothes'}>
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Shoulder</th>
                                <th>Pit to Pit</th>
                                <th>Back</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>XS</td>
                                <td>16"</td>
                                <td>18.5"</td>
                                <td>26"</td>
                            </tr>
                            <tr>
                                <td>S</td>
                                <td>17.25"</td>
                                <td>20"</td>
                                <td>27"</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>18"</td>
                                <td>21"</td>
                                <td>28.25"</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>19"</td>
                                <td>22.5"</td>
                                <td>28.5"</td>
                            </tr>
                            <tr>
                                <td>XL</td>
                                <td>20"</td>
                                <td>24"</td>
                                <td>29.5"</td>
                            </tr>
                            <tr>
                                <td>2XL</td>
                                <td>21"</td>
                                <td>25.5"</td>
                                <td>30.5"</td>
                            </tr>
                            <tr>
                                <td>3XL</td>
                                <td>22"</td>
                                <td>27"</td>
                                <td>31.5"</td>
                            </tr>
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}

export default SizeGuide