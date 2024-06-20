import './App.css';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Missing from './Missing';
import { Route, Routes } from "react-router-dom";
import FullCardContent from './FullCardContent';

function App() {
    const options = [
        {
            id: 1,
            state : 'abia',
            hotels : [
                {
                    name: 'Rixos Continental Resort',
                    rating: '4.1 stars',
                    price: '#104,000',
                    contact: +2347038412981 ,
                    address: 'No 1a Rixos Avenue by CBN junction off, Bende Rd, Umuahia 44023' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipODM6rJp6p0thEm6bL5fns0kz1JpLefaERxuOhJ=w480-h360-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipOjxSEPH6J5BueQRls3-2d8vAX0lFr0QdyERUP3=w480-h360-n-k-rw-no-v1'
                },
                {
                    name: 'Ibiza Hotel & Resorts',
                    rating: '4.3 stars',
                    price: '#130,408',
                    contact: +2349135847362 ,
                    address: '129 Okigwe Rd, Aba, 450211' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipOsFhie259B0qw0I7X5469Ir0dlMniEHFRI-bm_=w480-h360-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhHavAgdJ4IQ6PwsbtMnWJO84sowHjLueGUWyMbAyHNnvNiLKfYaHk-n3RRUnCfBUBR2IGcGeDkxfvVTfmyFpaexvH4qBhBoLxDmQnQfn8YBGuzSHHy50FZH9ZNn86coo-zsdhcGqYzqrI2Cfo8q5xMu3OQQmanzp5WEJPUMRPjBCLeisbC9SQwD=w480-h360-n-k-rw-no-v1'
                },
                {
                    name: 'Winpher Hotel',
                    rating: '5.0 stars',
                    price: '#150,678',
                    contact: +2348100293927 ,
                    address: 'Iyiocha Road, Amuvi 442101' ,
                    image1: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhGhrv007Dx5otpnkkYGh3pVMFpZAFN8_fP0QWbbeZlwNcbKdrm3OTvqkrafGtToQVVtE1-Fpy27eM3tzhZL4fR2_-Uz66xZ_SM0gIAyFYSFXvxdNHW4z2VVtrPHfA-ro3ZVT4BbVD4j8eKZhQBEM6WY2z9Hf8lbNfUKIwj6dZFXCON1gkQ9FFLv4A=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhFRpjHsYrlkGRXD_ZGaBl63ObgQOzdasouEPiN4bmOSm0ABFqQLzOulCFBntk3RZbCCa76znRXNZa3BWI70RNjJne748eWG7NVsc8YGTFkQ4DI_j9ivLJk3D-M7czLEemzua-SuPy1n-HblmcAWJ_SW7NzP5eYP87O14vGGr4NPoQHP4uv9ErIe=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 2,
            state : 'adamawa',
            hotels : [
                {
                    name: 'City Green Hotel Yola',
                    rating: '4.1 stars',
                    price: '#182,023',
                    contact: +2348084848192 ,
                    address: 'Kulle Close, Karewa, Jimeta 640101' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNtKlc4lp4h7R_kBV1Vgz4rlA03PiAbix9xm_Q=w287-h192-n-k-rw-no-v2',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMwy4p7gPkeawKnD4c2F_el82chep0oG0Tjffc=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'AUN Hotel Conference Centre & Spa',
                    rating: '4.2 stars',
                    price: '#239,810',
                    contact: +2348058705555 ,
                    address: 'AUN Hotel Conference Centre & Spa, Wuro Hausa, Yola 640101' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPqzKXCqZRCUN-_ktt2zZjFReB1Q7FvuF5R8fHU=w287-h192-n-k-rw-no-v2',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipN9fwyf7CdHM1cMgqw1TD_lRoIsWyMg271oLSuY=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Madugu Rockview Hotels',
                    rating: '4.0 stars',
                    price: '#55,000',
                    contact: +2349047703061 ,
                    address: 'No 10 rock heaven avenue, Behind government house, Yola' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNihTqutfBQhwHhN7aYxhLZSAkmuNwkx3oTZfka=w287-h192-n-k-rw-no-v2',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipOlt43ebPZftBGZT7CC1MYL8vyLcy8rSIj9pXFj=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 3,
            state : 'akwa ibom',
            hotels : [
                {
                    name: 'Four Points by Sheraton Ikot Ekpene',
                    rating: '4.5 stars',
                    price: '#170,487',
                    contact: +2348039008010 ,
                    address: 'Plot A342, Raffia City Plaza, Highway, Ikot Ekpene 530101' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNJ2LcqvWUb-beu7riHJstpzslE6NO6Thouch4-=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipP_zykQvDX9Gky1iIUD-j_XNx5Zw_BKppPcOILr=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Vinpy Hotels',
                    rating: '4.5 stars',
                    price: '#100,535',
                    contact: +2348134779599 ,
                    address: 'Udo Udoma Ave, Uyo 520102',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipMhDEi4IbomkOXoVKOt_USXKGOZ9EInf2fZckQv=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPzOh_orzpORuFONeuefdSdwRG-tD99NXQVXIw3=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Ibom Icon Hotel & Golf Resort',
                    rating: '4.5 stars',
                    price: '#800,092',
                    contact: +2348080527411 ,
                    address: '520106 Nwaniba Road, Uyo 520106' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipN5cNNe9hHUtYGaSWoA2-ZT6yViuxpvVdRtHZg1=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipOTOmVxj2ghBIj45jdzoHHmOWWony0GdiYmRo98=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 4,
            state : 'anambra',
            hotels : [
                {
                    name: 'BON Hotel Smith City Awka',
                    rating: '4.4 stars',
                    price: '#260,174',
                    contact: +2349069668844 ,
                    address: '4 Abakaliki St, Awka 420107' ,
                    image1: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhEjyR-z9yTBi6FbALxrPKA_AO5h9Jr93NBoe6opGWKkX5AEGsSD-nSTFoJtTFajP0idC-ZniUNPRmE6KKnRn3GgnnoMWVuKtBAtl4TkHjxj3wwHKfMBGitq8gKLG81xWXDvk8Zij-GeKB1bPZCU6IlLm6V9szwjCKI7xx_ormYAeOwK047h2lXR=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipOLoNuZwPRqd06XQD0QwSqbpJWqNsqlY0YzrPQI=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Waldorf Blu Hotels',
                    rating: '4.2 stars',
                    price: '#199,724',
                    contact: +2348148967819 ,
                    address: '44 Oby, Obi Okoli Ave, Awka 420109',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipP6tXrCSiGibuVYUY5a37HXTQ3qtfj2ZYcac-6I=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipOZNzQ6HZhbyKYwjPAbmeFY8V1oA6eZOoCuvAuL=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'MaxBe Continental Hotel',
                    rating: '4.1 stars',
                    price: '#228,829',
                    contact: +2349126966027 ,
                    address: 'Opposite Udoka Housing Estate, Awka 420107' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPuTLjVx5GLrZkFXWENdF-X2zRdVuNphUcZLB2Y=w480-h360-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMF27mSJ0pnF39Rx-hZGOheI-oRVWs_698E7Bfb=w252-h113-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 5,
            state : 'bauchi',
            hotels : [
                {
                    name: 'Sulgad Majestic Hotel',
                    rating: '4.4 stars',
                    price: '#67,828',
                    contact: +2348127455124 ,
                    address: '8RJJ+FXM Yelwa, Maiduguri Bye-Pass' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipO_avBOOAeoR9cgUBiWd_Aa9maw0FklHYqRsJur=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMgKjSwiVpnUo3rpQuMz5j4n367eVbFTGmrSCmF=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Yimir Hotels and Suites',
                    rating: '4.1 stars',
                    price: '#38,170',
                    contact: +2348156327752 ,
                    address: 'Plot 47, off Sunday Awoniyi Road, New GRA',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipOrRnI2vwTylFaCPaZbc9Yko11X7-7TsUXqyGv0=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipOb4dW_QHAvLkjFHqJp20zHfiLUf8ozll6QZ6LN=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Jamil Guest Palace',
                    rating: '3.6 stars',
                    price: '#12,638',
                    contact: +2348034383948 ,
                    address: 'No. 1 Stella Obasanjo Rd, State Ave, adjacent Dass Park, New GRA, 740271' ,
                    image1: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhE0kmOVkj_HLbdHGHnI6pscRmiaBnFeUPDOxW-rLbIVzTXXxsX5tmrckJq1Tg3pP4YgBSMp926zJ_71rhkQ9Ip-qiWGm_NHwWIua9YubZM_3SuJu5ELyizvdrxUrubvLYltfXmIbGjNu8edipFqdVwlD6eWogJe4uO-RPLW-Puuws8Pnwz-FV8=w480-h360-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipP_5DbYZ4B5AlNdQcJIzx1FxUmD11IOWEv3kGLj=w252-h141-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 6,
            state : 'bayelsa',
            hotels : [
                {
                    name: 'Top Ranks Hotel Galaxy',
                    rating: '3.4 stars',
                    price: '#20,520',
                    contact:  +2347008808800 ,
                    address: 'W79P+HFF, Sanni Abacha Expy, Yenagoa 569101' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPI-9pwuUxDt2dDGb8H0XnP8psZ73Wi8zh_gjVF=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPAiX1JrgWnXk3uNcw2-6GCB4Cx7HlHN6Q5Ayu6=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Aridolf Resort Wellness and Spa',
                    rating: '3.7 stars',
                    price: '#59,262',
                    contact: +2348174067733 ,
                    address: 'Okaka Estate, Along Isaac Boro, Expressway, Yenagoa 569101',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPvVF0JMaWe5756jbvbro3ZS2-8kxRO-NnL94Vh=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhETQeyihWgOtkHgtq88S8ZVOtqgJQiuejUkv8pSdOs9EPTqlyx9qcuRWaYdtpI8SvjSfBX8l9IIWML8cai0ye1ciMQJn6uWefu91ggjxN0GiumbieOmxxm9A_541O63AUh32mkI0PMIT9jdxyIPihAQDI-_pmKC951DRM9VB1R0c4cNzJehldDt=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Ayalla Hotels Limited',
                    rating: '3.7 stars',
                    price: '#47,230',
                    contact: +2349071111218 ,
                    address: 'Isaac Boro Expressway, Kpansia, Yenagoa 569101' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNltibm6fL6HzMS98HQNcoPzozAviDyGiOlsSch=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMGtQAcBk8N1NvgW1esXkxWl5uqyJ8BErpViqV9=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 7,
            state : 'benue',
            hotels : [
                {
                    name: 'Benue Hotels & Resort',
                    rating: '4.0 stars',
                    price: '#36,750',
                    contact:  +2349021226645 ,
                    address: 'Benue Hotels and Resort, 57 Ahmadu Bello Way, Old GRA, Makurdi 970101' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipOcMTD0sWoTCb1DUOL5YUS2inGVe3Xwp9MJYDZp=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPapf61aFiDUwhL5-AYTGDCMEbcnneF_YFMJXnW=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Benue Metropolitan Hotel and Resort Limited',
                    rating: '4.1 stars',
                    price: '#31,500',
                    contact: +2347025020009 ,
                    address: '10 Abubakar Atiku Road, Makurdi, 970101',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNjXbbF0u2ju6lBvnIjQe93hoiMVWlTy7ws_cJT=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMSim_vhI8qzWvgLrlpsHAw5VyHA0ec2Ejw8yHk=w287-h192-n-k-rw-no-v11'
                },
                {
                    name: 'Edgewood Manor (By Amedus)',
                    rating: '4.1 stars',
                    price: '#48,860',
                    contact: +2348035558617 ,
                    address: '40 Benson Abounu Street, High Level, Makurdi 970101' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipOGG5NwFz0rcZ3chppjCFaMUYTVMPLoByDFtBqa=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPUpAG9U7rwbmpnmTzSD3QLw7z0Yu4IJkA54CHf=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 8,
            state : 'borno',
            hotels : [
                {
                    name: 'Solace Suites and Homes',
                    rating: '4.4 stars',
                    price: '#137,253',
                    contact:  +2348099995225 ,
                    address: '37 Losho Road, off Lagos Street, Maiduguri 600215' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPQzGr9Fht9WlmQfcyDyfd3Ip0o46_Gap1vo0EL=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMyF7QJGmJ1wxlEnUGsEEnDKmWR0bq9yjIAI0ty=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Polo Grand Hotel',
                    rating: '5.0 stars',
                    price: '#108,086',
                    contact: +2348089486283 ,
                    address: 'R44X+2F3 Polo field, Maiduguri 600104',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipO13uQqRhK50rveYmwHeI31dUSRFBvDwmFJI3Ky=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMvfl3juHEKdCKUSGf7f2Q-yQbInl05WjObH7O2=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Nanne and Boi Suites',
                    rating: '4.0 stars',
                    price: '#33,900',
                    contact: +2349077000904 ,
                    address: 'Onitsha Road, Maiduguri 600282' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipMSmmB1tykQUC6WNKGHEg6h9yiUk2-VdxhVB0py=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMlrCnZ0nrvLSG55zQhgSIM2LsZ_FHPG7H2ZVeI=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 9,
            state : 'cross river',
            hotels : [
                {
                    name: 'The Metropolitan Hotel Calabar',
                    rating: '4.1 stars',
                    price: '#117,485',
                    contact:  +2348066900009 ,
                    address: '10 Murtala Mohammed Hwy, Big Qua Town, Calabar 540281' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipOoxDgotxeeOIwzHnX9Ch3xHcBH0m3zDpfR9-GF=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPj3CZyo2tgJz0vLbw2b1sEkNYvsxgFLlUtg_Oz=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'De Grand Hotel and Rooftop',
                    rating: '4.2 stars',
                    price: '#91,365',
                    contact: +2349135319524,
                    address: '1c Felix Nsemo Drive, Diamond Hill Rd, Old Town, Calabar 540281',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPyegEA4Lm1WKHi5MsaTrcMRxP9xYeksnx8r79e=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipOu94o__l9Yt8RfUYhriv6JDhklEgESWApxlGdC=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Hogis Luxury Suites',
                    rating: '4.5 stars',
                    price: '#55,000',
                    contact: +2348099903335 ,
                    address: '7 Akim Cl, Housing Estate Rd, State, Calabar 540222' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPktEZ0i1OIeJW6SoYzJ1I9B1MTpKDTq6FB8FJ2=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipO3zkaLQfeWFEQMmT78O3pMWSkqh7wVXhjTN1Tc=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 10,
            state : 'delta',
            hotels : [
                {
                    name: 'BON Hotel Delta',
                    rating: '4.1 stars',
                    price: '#376,953',
                    contact:  +2348068700306 ,
                    address: 'Km 3 Nigerian Port Authority (N.P.A) Expressway, Ekpan, Warri 102215' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipOOh-r1i3zoh3LtDALF7Z2Gumxi3ef4PTuKqO6G=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipNIqtB4PrOMh1sp7Qr8jxGuqzvPUCSItS5zIy5D=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Best Western Plus Elomaz Hotel',
                    rating: '4.2 stars',
                    price: '#120,238',
                    contact: +2347083872379,
                    address: 'A/B-27, Core Area, Plot 22 DBS Rd, Central Area, Asaba 320241',
                    image1: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhHVP7hvxcmEfszgpsdQb2GUf-0gyclivyTQwUmQpuVEJxK5SzD1_LZ1c7vfKfKF6PjuEFP50XvrZZJThfTivGLOlAh1Xf2qnaZuV4WMXEHyLLBNhcuxSjZERLoF7Cbyutal_TH5YC5o_ntbSgkqjxX0ntILEqQB9NC9hay287xz3k8aAZsRZbK3xg=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhElvkzD6kzkH9F3aouy0kXP_eX6m0usyvKSRXsOycyZ9m6syL8qO7GbMwVC5i30qjVTwSqEBHl-cyrpWDL81rW0jAfj_yx9qmri4IrC_CJj5qPraJ_mZ_dKudgTH9HnOWpqJfLErq4REw-v3wIdViN7RrdL3ENsQg0ZKb9LKG65QjrHa_BwxQI=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Clique Court Hotel & Suite',
                    rating: '4.3 stars',
                    price: '#111,203',
                    contact: +2349114747482 ,
                    address: 'Engr Kragha Layout, Okpaka, Warri 330103' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNz_5huMzNyfQldRFlHDnAgNegxKoKct4ZQe8IQ=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPxDHPibI6DuWdGqypiSvQdjMydgf61CSK8hzxL=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 11,
            state : 'ebonyi',
            hotels : [
                {
                    name: 'Ryan Hotel and Suites Limited',
                    rating: '4.5 stars',
                    price: '#210,847',
                    contact:  +2349167775555 ,
                    address: '32 Onwe Rd, Abakaliki 480108' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNJs9VuQ2zTtR1vEhVNZOX2odK4ggcA5OHNG57h=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPDSTyErCp3-HMMTrFDO_0K5Mm5jAmZGV1w3Kzw=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Abuson Hotel',
                    rating: '4.0 stars',
                    price: '#116,999',
                    contact: +2349027863760 ,
                    address: '14-16 Onitsha, Azuiyi Udene, Abakaliki 480105',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNXUDu5mOR42VPm-vcYeVsE_MLEDU4lEOPw3-34=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPD3BW3ClvHUHdy1-xwmgnhgKUcacnwFvKNUQgM=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Blossom Height Unique Hotel',
                    rating: '4.2 stars',
                    price: '#103,386',
                    contact: +2348100250761 ,
                    address: '16b Goddy Ogbaga Avenue, Ntezi Abba, Abakaliki 480211' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipM1cNdZPHlzysqvlugLcY5LRy4eJu0YC8S10M6t=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPAi4sBDOcYDa3P6LfjTT4TB-NcSmHEa9uU-zH_=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 12,
            state : 'edo',
            hotels : [
                {
                    name: 'OTI Hotel',
                    rating: '4.4 stars',
                    price: '#273,864',
                    contact:  +2349150244444 ,
                    address: '22 Benin Sapele Rd, Oredo, Benin City 300102' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipOnAjMrkNnh9u8OK9lLpqRyLIvqzw7-a7nBlwk5=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMHgDxu1rx1KMz7nCU26oL7_19zU2d-NwXc7tGQ=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Protea Hotel Benin City Select Emotan',
                    rating: '4.4 stars',
                    price: '#116,497',
                    contact: +2348139877770 ,
                    address: '4 Central Road, Off Benin Sapele Rd, Benin City 300251',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipMHMswK5AacW36AIGkr6wBOKpTAOx4Hiz2oIaWs=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipN8NdPvj0VmwJK_soEfg09ZPpfyuGxO4DsF5qBT=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Homeville Plus Hotel',
                    rating: '4.2 stars',
                    price: '#31,500',
                    contact: +2348052290830 ,
                    address: 'Evbuomwan Street, Off Sapele Road, Etete Road, Benin City' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNkwxOLvSloj9yGhxUg5jKS4yPHAJBEDy6Vzdqf=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMiNd1R1pTnYnuJyrrD7ku1gux9DpdoYGds6yFz=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 13,
            state : 'ekiti',
            hotels : [
                {
                    name: 'Delight Hotel and Suites',
                    rating: '4.2 stars',
                    price: '#143,000',
                    contact:  +2347082370732 ,
                    address: 'Ado - Ilawe Road, Ado Ekiti 360211' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipOm5ziXC_py6tNQap_SqUx4j44wmFbL8AaNMtuD=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPueQvkayPaebzr3hbFQPVBuAZxaGFOj8DzoywY=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Midas Hotel & Arena',
                    rating: '4.1 stars',
                    price: '#105,000',
                    contact: +2348134858585 ,
                    address: '15-19 Ado - Iworoko - Ifaki Rd, Ado Ekiti 360001',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNcTbd9Q9x1kH93rw-pQ1MaSUmtIXn818kM0qnt=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipOYF9x1hW46S0o58zFqHPxFkqXeapwDcZX0n_-T=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'RONKIBOG CRYSTAL HOTEL & SUITES',
                    rating: '4.3 stars',
                    price: '#126,883',
                    contact: +2348137873855 ,
                    address: 'J6XM+563, Housing Rd, Ado Ekiti 360102' ,
                    image1: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhHfhNqbuCgbe0AFf82y-S2ubFGuZVg1Ay7VyyZkRdRdPFfnAXpZeWbfVqwM-gQ1u0TMMVOGZJE3svahL8FyhEhaNQQnH_eE3ewJ7J8slFTUSiJsMz-Bqbr_2UV0vd767tdsYGZHExoKKb390NJrQqP5JHlMsNycdw5D2QOQCvvG3os578de_Atu=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhEpBA0CHqbSq3gQqcjWpbpmbUh40SXuuKCf6Fvj1my8IRc4JbnWRRL-HsUfFAtzbxvhiScNsUSHREDlncO4TYQv23Eq_vUM2vZ4CbXiU0jHr_qlS9JLhRnRsJ-lYGESCsDb3BD1mmUqwOyk5BS7ifFg5vOHnqjf8HfDy_G1nVyj4DdN8uyeONBs=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 14,
            state : 'enugu',
            hotels : [
                {
                    name: 'Carlton Swiss Grand Hotel',
                    rating: '4.3 stars',
                    price: '#325,824',
                    contact:  +2348068147424 ,
                    address: '47b Nza St, Independence Layout, Enugu 400102' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPFSO77OSYiki233qzCLMJY3lVP46xUJToHVMqN=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipNatFz2BvGkYS3cX8h7mbEmKIJetVDpWlylFFQe=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Bon Hotel Platinum Enugu',
                    rating: '3.9 stars',
                    price: '#281,963',
                    contact: +2347067984490 ,
                    address: '1 Platinum Cl, opposite Spar, Independence Layout, Enugu 400271',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipMVemEfi3bTGNhtq6op4khRsq64_eRypHBQCMPu=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPdiNLBE9fAdMsDZt9_sDPIvo4xKXYpQtt9Tn50=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Best Western Plus Enugu',
                    rating: '4.2 stars',
                    price: '#187,051',
                    contact: +2349060006091 ,
                    address: 'Plot 607 Nza St, Independence Layout, Enugu 400001' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipOFU1KiJ7RV2GekV3tjMhltjM7rubjDhUpfkIuG=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhF-zpPHi0zIiCyS-viMwOseDUryl5Oso6wP9rfxzf6_4BCpRwIpJuw-7coXHbkirW7ESKCoT_m9qEWK3hMKnDXkFRexdMNX72qTuu6IQ7dQF1HB8n4aR2UpB0ZJlsFOXBVnwrwRI9E_3PfsnakfO938VLtwoDs08CwGrvRMLJh7itU_AM4CXQtt=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 15,
            state : 'gombe',
            hotels : [
                {
                    name: 'Emerald Royal Suites',
                    rating: '3.8 stars',
                    price: '#16,074',
                    contact:  +2347061761748 ,
                    address: 'Off Tula Rd, GRA GRA, Gombe 760212' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipOkA40wAbjKlc-314iqTDVsmp9fPnlckps7ghWE=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipNgt6pQpIaztjAoGDooh6V2-tfbwlnmIlQGLgiL=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Custodian Hotel Gombe',
                    rating: '3.9 stars',
                    price: '#18,753',
                    contact: +2348107412344 ,
                    address: 'Gombe 760252',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPugb3y46CvYmOL9s-2FX6I7AaghMivgh-mah83=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMqTPXHE9c3D2ljWsK8v30wPzPV1JG3zG9F3wSK=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Maidugu Guest House',
                    rating: '4.0 stars',
                    price: '#12,540',
                    contact: +2348099405207 ,
                    address: '75HF+M65, Alkaleri, Road, New GRA, Gombe 760251' ,
                    image1: 'https://images.timbu.com/hotels-ng/supplier_maidugu_guest_house_892270_22_562x422.png',
                    image2: 'https://images.timbu.com/hotels-ng/supplier_hiamzb0qak_1_562x422.jpeg'
                }
            ]
        },
        {
            id: 16,
            state : 'imo',
            hotels : [
                {
                    name: 'BON Hotel Tripod Owerri',
                    rating: '4.4 stars',
                    price: '#178,585',
                    contact:  +2348139833440 ,
                    address: '4 Maranatha Ave, New Owerri, Owerri 460271' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNAceWXYQK6yCUjfmLCHFgBT-HBal1aN5HYUJTT=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipP1d3G4aBKiy1qcGGoU9LpUB4ySQUHLXpl6NW1p=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Protea Hotel Owerri Select',
                    rating: '4.4 stars',
                    price: '#121,000',
                    contact: +2348139833310 ,
                    address: 'Plot H/1 Nekede Pocket Layout Protea Road, Owerri 460232',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipOZBv1OOVd3VOmvdK2D4Aii6aSoQrQpNjknjejg=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipM-fyp7xQeaEHdWRvNgtfIhoXL_z0x7PFs2WggC=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Amber City Hotels',
                    rating: '4.7 stars',
                    price: '#117,485',
                    contact: +2348098808888 ,
                    address: "11 Musa Yar' Adua Way, opposite Hot FM, New Owerri, Owerri 460281" ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipO-2uuvzwD0UFve_mQSf4WppFVb_acI5xVQ4l15=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMeX1joWdA7acYIDGHS9OU1aj9yQBTcmDnJojSV=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 17,
            state : 'jigawa',
            hotels : [
                {
                    name: 'Dutse Royal Hotel',
                    rating: '3.7 stars',
                    price: '#21,090',
                    contact:  +2348068030403 ,
                    address: 'Dutse 720101' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipOsVawGfvBk-agZjcqMItqAQedoZnXsipBdsZYB=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMQ0RFByF5FyRGLnpw7TRzjsZoqvNdHPP-JHwn-=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'B Nakowa Modern Guest Lodge',
                    rating: '3.8 stars',
                    price: '#5,000',
                    contact: +2348148808800 ,
                    address: 'Takur Mopol Base, Dutse',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPwPF_yj1AtuPgrZ428fMfnDexbDhB4l84H4mGD=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipNiKo6q9yOHKH9eVhjEN5FSXfzezbsPOY6IIFX_=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Tahir Guest Palace(Annex)',
                    rating: '3.6 stars',
                    price: '#24,000',
                    contact: +2348148808800 ,
                    address: 'Ibrahim Aliyu By-Pass,Opposite Ministry Of Land Dutse' ,
                    image1: 'https://images.timbu.com/hotels-ng/supplier_tahir_guest_palace_annex_293252_9_562x422.jpg',
                    image2: 'https://images.timbu.com/hotels-ng/supplier_tahir_guest_palace_annex_293252_1_562x422.jpg'
                }
            ]
        },
        {
            id: 18,
            state : 'kaduna',
            hotels : [
                {
                    name: 'Kajuru Castle',
                    rating: '4.4 stars',
                    price: '#309,000',
                    contact:  +2347045575062 ,
                    address: 'Kajuru castle, Kajuru 800211' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipOnd6SHsT97haLDvDbJDRQ8gV8a_omXETRI9WW_=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipNQBUXIalBZ6lYkrgUjNYcJPOKiLyRQWNS-UvJH=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'castle de white house hotel',
                    rating: '4.3 stars',
                    price: '#48,034',
                    contact: +2347038944186 ,
                    address: 'G.R.A, 9 Kwato Rd, Ungwan Rimi, Kaduna 802125',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipO_uQUouvkX41svclU4KcddJJFpVKjzVsMPZW75=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipM-Prg2lF9yBIMMipVXWOwjbABLh0PLtQPDkTb9=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'The Neat Place',
                    rating: '4.8 stars',
                    price: '#44,409',
                    contact: +2349022661098 ,
                    address: '5FC, Oyo Rd, Kaduna 800004' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPkkc_xa56d2HlmHKeFWAe7GBrBkOqdBK3utVc3=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhEv4lhKVpBEd7n_CxYXB_ndDgmNiH2FYaptpbMqGC1-tgEDCF17BLPzO-i6ygXx0i47Taz9NSYsmrQtIQsTETrtKVgk5dkg-1tsQ4MrBr5oJFYoS4Mh0F2Ky9QYLOtzoVhoujV45EI38uefniP9XaxoYL9-2RGfYOyysSMn0mzW0TPxb-1Ws2Tw=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 19,
            state : 'kano',
            hotels : [
                {
                    name: 'Bristol Palace Hotel',
                    rating: '4.4 stars',
                    price: '#627,000',
                    contact:  +2348111353535 ,
                    address: '54-56 Guda Abdullahi Rd, Street, Kano 700001' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipMTkDUrlsCggeU2mDKrDwsINJhuJnfVt2cFrkXP=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipOKBgv8tjDHbH_78BtL5qi-ZsMrvMGmVipXm_AB=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'BON Hotel Kano',
                    rating: '4.4 stars',
                    price: '#352,438',
                    contact: +2349122495109 ,
                    address: 'Lafia Rd, Nassarawa, Kano 700213',
                    image1: 'https://lh5.googleusercontent.com/p/AF1QipPIdhFjweOqBbtwBXiWYDnl2APNt_JrWvOmvqrI=s204-w204-h116-p-n-k-no',
                    image2: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhF_eiO_BUw3QnaHg_mNCFnyA9SJKLq0k2H-QA50MTfaBWN1cjT6Wztl3wogR7hficS5DhDr8cGfnO3FsAr09ST3SwpuCK3ap1NAw182aNBfnVlJHP9zV5WO4Xp4XoRt8m6FVNmPp4MJeWU8Y_HSBX1pfXefrzLRa5DFMq57AnfVCvg7CaPusj6MPQ=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Chilla Luxury Suites Kano',
                    rating: '4.0 stars',
                    price: '#49,500',
                    contact: +2348152525275 ,
                    address: '110 Audu Bako Way, Nassarawa, Kano 700213' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPtX2nvNLIuhLhuk63xQu2lL4s5iiCirNTrUPTp=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPoegIc721PvNMhwFC2Q9HlMu9FXgKSrYq0p4WL=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 20,
            state : 'katsina',
            hotels : [
                {
                    name: 'Katsina Sahara Suites',
                    rating: '4.0 stars',
                    price: '#12,000',
                    contact:  +2348148808800 ,
                    address: 'No 36A Hassan Usman Way, WTC Road, Katsina 820101' ,
                    image1: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d0/74/b4/outside-view.jpg?w=800&h=-1&s=1',
                    image2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/6a/a3/ce/photo5jpg.jpg?w=800&h=-1&s=1'
                },
                {
                    name: 'Fadama View Motel',
                    rating: '3.6 stars',
                    price: '#20,000',
                    contact: +2348148808800 ,
                    address: 'Off Yahaya Madaki Way, Gra Katsina',
                    image1: 'https://images.timbu.com/hotels-ng/supplier_cb7gvxl6re_24_562x422.jpg',
                    image2: 'https://images.timbu.com/hotels-ng/supplier_fadama_view_motel_501260_27_562x422.jpg'
                },
                {
                    name: 'Al-Bhustan Hotels Ltd',
                    rating: '4.0 stars',
                    price: '#10,000',
                    contact: +2348148808800 ,
                    address: 'No 15, Yahaya Madaki Road, Katsina' ,
                    image1: 'https://images.timbu.com/hotels-ng/supplier_al_bhustan_hotels_ltd_949421_14_562x422.jpeg',
                    image2: 'https://images.timbu.com/hotels-ng/supplier_mvumajcgxe_2_562x422.png'
                }
            ]
        },
        {
            id: 21,
            state : 'kebbi',
            hotels : [
                {
                    name: 'Azbir Hotels',
                    rating: '4.3 stars',
                    price: 'Contact accomodation',
                    contact:  +2349032772020 ,
                    address: '23 Sani Abacha Bye Pass, Birnin Kebbi 860101' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNh0GUmnWVd_m72NgnQGA_WSJXTbxyWCvTJkM6W=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipNqrkZ2n2qfwacTDN3p0EDOPc_F8K-sf3pTz3T5=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Aberta Guest Inn',
                    rating: '4.6 stars',
                    price: 'Contact accomodation',
                    contact: +2348064572747 ,
                    address: 'Opposite New Garage, Gesse Phase II, Birnin Kebbi 860101 Nigeria',
                    image1: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/a8/85/6b/aberta-guest-inn.jpg?w=800&h=-1&s=1',
                    image2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/a8/84/eb/aberta-guest-inn.jpg?w=800&h=-1&s=1'
                },
                {
                    name: 'Safari Guest Inn and Restaurant',
                    rating: '4.0 stars',
                    price: 'Contact accomodation',
                    contact: +2349015525389 ,
                    address: 'Behind Old C.I.D Office, Birnin Kebbi Nigeria' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPwF3cxhQGdcp3OvgjR_KQ5XsDX0Gk6JhLvFHvx=s1360-w1360-h1020',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipO6iOgh8sbHIGxdrdFNh5v_BF3bSpRkiYdfm57Z=s1360-w1360-h1020'
                }
            ]
        },
        {
            id: 22,
            state : 'kogi',
            hotels : [
                {
                    name: 'Idrinana Hotels',
                    rating: '3.8 stars',
                    price: '#24,150',
                    contact:  +2349059623400 ,
                    address: 'QPV6+M3W, 1, Idrinana Close, Off Old Kabba/Okene Road, Phase II, Lokongoma, Murtala Mohammed Wy, Lokoja 260101' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipMPRoSpLOCIfCBVYfPn3B7HRN_8hJ99Qbt52_SB=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMQB9ldBohtnB7rEeovix2PFhhhsoaBRtmYiAHK=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Saatof Hotel and Suites',
                    rating: '4.0 stars',
                    price: '#42,000',
                    contact: +2347066250282 ,
                    address: 'G. R. A, Faith Close, Foursquare Church Close, off Adankolo Junction, behind Glo World/ Sterling Bank, Township, Lokoja 260101',
                    image1: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhFyf_pddQI32tKoS7sB0Uuss6A7ddYln7xEHrkQqhoF3K2voIhD9zAxlkdg7jWcyOjcD7ZbK-ov8dQ29Jupqhbs_KHikByycIkXlgG5uPmWluo7ZXWNLBxTb84fMehsI8dnUSiwgmfNy2hcDa5Of8gRh5sZOhFGZnXJ-zCH88MqLHIKsHCT7s4=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPUPNbwCI8Z8eWM1GnTHIC2RkXxVfqvB6c_ytlZ=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Edgedrive Hotels',
                    rating: '4.3 stars',
                    price: '#47,100',
                    contact: +2348132867025 ,
                    address: '23 Kunama Cl, GRA, Lokoja 260101' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPxfwumC0Mqhew9AYXymhVDIikC9onlWNImk7Z_=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipNAIJpJXqrFR5wrwofMblzeSI-5iJ-qmkja54n4=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 23,
            state : 'kwara',
            hotels : [
                {
                    name: 'Monarchs Luxury Palace Hotel',
                    rating: '4.3 stars',
                    price: '#175,444',
                    contact:  +2347068533771 ,
                    address: 'KM 8, Ajase-Ipo Road, Sapati Lle Rd, Junction, Ilorin 240104' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNo3Fs4tcB_KvTBck05i5_9e95KiIH4W-0cL5WQ=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPmHYgNzAapM8wUMDTI9yHxlnnX6esI87tkvRX-=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'AGA Woods Hotels',
                    rating: '4.5 stars',
                    price: '#70,036',
                    contact: +2348033023241 ,
                    address: 'NNPC, Pipe Line Road, Ilorin 234031',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNsTmSASOM7DQwd1c3MaMlpddHyqUY1uwR0JfxS=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhGWOFoDocKmQdkgqokYM4dcbjZWlMo7zp2iy2hLviuqr35usupYtBxv4RuozEqGl3uFNIprji6_va3Nri-iDFhfz_iMPeBmArQDTJ612qu13J5KokjOvUAVUXsaCKGFwYXW-zToWEKmiE2Vn8peujLmMhlSBerbxpec8dtijpms8XCPcCzyBg_M=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Noktel Resort Hotel',
                    rating: '4.3 stars',
                    price: '#44,100',
                    contact: +2348111111929 ,
                    address: '14 & 16 Noktel drive, off catchment road, Ilorin' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipM9G7XwQvMwVhrTSnWRwa_7rvtCq3d7vsIPHQC_=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipNcOfBDa9p3HsBc4ol2QoyKXPjjhhxDaYSzs-Km=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 24,
            state : 'lagos',
            hotels : [
                {
                    name: 'The George Lagos Hotel',
                    rating: '4.5 stars',
                    price: '#418,000',
                    contact:  +2342014663664 ,
                    address: '30 Lugard Ave, Ikoyi, 106104' ,
                    image1: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhFku81GZlP54E5XCdRmcwqVgi_bnML0BKfam9ZDlUcj41-fAe9UYVfFUunpKvND8E9SIWR9AX4uuKp2kx1dLEq7G9DPDFhnUYpTkSO1_PxBf4c6g5N3hGTWiq4jQZZ8McTLqxLZsgdfkiqZPMJLIqSvkeFchNoNEVgmJGahbwZWm-QYFgpfhODu=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPmwERhVM5clEvOV9dlMDohGZgmM--dgGvTufdV=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Radisson Blu Anchorage Hotel, Lagos, V.I.',
                    rating: '4.7 stars',
                    price: '#345,420',
                    contact: +2347080610000 ,
                    address: '1a Ozumba Mbadiwe Ave, Victoria Island, 101241',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPqhj3WHTCnE9a2zj_w1Rw8MwFiXYE7y6GfIjMV=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipM1jStjH4Av3o5-dUn7ikM5uBLgOFHacJ6GqUNm=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Eko Hotels & Suites',
                    rating: '4.5 stars',
                    price: '#165,900',
                    contact: +2342012772700 ,
                    address: 'Plot 1415 Adetokunbo Ademola Street, Victoria Island, Lagos 106104' ,
                    image1: "data:image/jpeg;base64,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",
                    image2: 'https://lh3.googleusercontent.com/proxy/i6xHyyh_13FGtu67cKGyqqsRfkDYcaRSQ18tqHUucYDB3C7wu8OYNUvbHOCR--nlntPrh0HnrtHMOz4gqx9tKCAlXnhjXDH7HqyvZeFZoZAxmYpOLPm8DJOsnvNVyPpHpbLGEakvY0aj64Gqzc-kI78nxfkYfA=s1360-w1360-h1020'
                }
            ]
        },
        {
            id: 25,
            state : 'nasarawa',
            hotels : [
                {
                    name: 'Tazu Luxury Hotel & Suites Lafia',
                    rating: '3.9 stars',
                    price: 'Contact accomodation',
                    contact:  'Not found' ,
                    address: 'A20 Ombi 1, Lafia 951001' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipM-RSCy1TuJjsKL5Jx6fPdSTyzvVWTHb9267Ea3=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMIOO1yR2zy3kRWLV8CfwSv1Ix6aTE-9w_z4mS1=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Nassarawa Luxury Hotel',
                    rating: '4.1 stars',
                    price: 'Contact accomodation',
                    contact: +2348051542932 ,
                    address: 'Lafia - Shandam Rd, Lafia 950101',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipP6HI8SDz9hcrbxahe6e3jX5YFVvLDNT9muCNUs=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMvEYgEqWHiqjo2pwVDxJq60ftkdfBnvtCFRik-=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Taal Conference Hotel',
                    rating: '3.8 stars',
                    price: '#28,250',
                    contact: 'Not found' ,
                    address: 'GG9C+9FJ, A3, Lafia 950101' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNxMB0hoAVR1w8EIsRqBaorNoi9MJA8bb_YfWUv=w480-h360-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipOoM35nhuzkGhJbrb2vYxGMn_MpauYZDnlm-0Jy=w252-h189-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 26,
            state : 'niger',
            hotels : [
                {
                    name: 'House 7 Resort',
                    rating: '4.2 stars',
                    price: '#100,269',
                    contact:  +2348085505305 ,
                    address: 'Bida 912101' ,
                    image1: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhHcM9WjwA2v3Z--i6YxAwoWvHJj71dh1QhrYc3GJ67dRSer7q9PaaW2spG_Ypcm5vxm15u3ppIqiUNgCYzKJJQJMkbSHqLaO8jFjdOzt4qAQW4gvmTnKBf6eWYd3-ElKgZ8cOhFrSTBDpiebAdN-R6RjfZYUtzRhzi97mJeJN3TIY4ObyrXQr5O=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhFQFWiI70mLnJKYNR2PuFbQfF4dHJBxUa1WDIAGYvIKnll6TM9e1PvrhzRtWUZKNjRuTsK2xJx_eXFW_UZi_YEVpg3R9E1yLslqR_tFtCFvEdJpSr8--uHRqH8xBJkW0IQbdUYzuav57CqDGbUGJItzVdPmpNxZSx2YXruBeZuJUveTeBEwutuB=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Taste Palace Hotel',
                    rating: '4.4 stars',
                    price: 'Contact accomodation',
                    contact: +2349096774238 ,
                    address: 'Plot 195, BTP 16, opposite Federal Polytechnic Bida Small Gate, Doko, road, Bida 912211',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipOnWZOS6l_1gzjnDpoTu6R-80zwRyt8-J9JJj0K=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipM93Q-ZeDEV-a3l-aRdpX6I9gUKpb1ckIl_NkE8=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Zuma Rock Resort',
                    rating: '4.5 stars',
                    price: 'Contact accomodation',
                    contact: +2348123375147 ,
                    address: 'Zuma Rock, KM 6 Abuja - Kaduna - Zaria Express Way, Tafa 910103' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipMsnQCUKIne_qRiCgD-SFZ54z9ZCNID7LsUw95B=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipOtglL4VSJTaXgx7dOf5qUsCzCU6VBtii-T0MJs=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 27,
            state : 'ogun',
            hotels : [
                {
                    name: 'Green Legacy Resort',
                    rating: '4.2 stars',
                    price: '#450,013',
                    contact:  +2348112112222 ,
                    address: '110001 Presidential Bouleva road, Abeokuta 110118' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNNavDcOHO24OklvT9hALxXFilFe_sefz6Epvo6=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMKqazIixv0cnJ30rzt4FtpLexg3Qo8hainveuk=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Eden Hotel and Resorts',
                    rating: '4.2 stars',
                    price: '#310,175',
                    contact: +2348023327578 ,
                    address: 'Eden Hotel, opposite Chelsea Bus Stop, Ota 112233',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNxFJPUaDCANeGgP27UJnE4gF1uVjxXrzAS-1RI=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMr51Gblc5nFCVwDnGA8jQKqM93EbsrDxzFeW2h=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Park Inn by Radisson Abeokuta',
                    rating: '4.7 stars',
                    price: '#225,221',
                    contact: +2348090714325 ,
                    address: 'IBB Boulevard, Kuto, Abeokuta 110252' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPosPtUB3J1mtdIkJMvGtb_5alFa474xuCpKt3_=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipO1EftK7k5rMCt91QiU5ALQ_VqpooBjiPqMo7jX=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 28,
            state : 'ondo',
            hotels : [
                {
                    name: 'Deja Vu Hotel & Suites',
                    rating: '4.4 stars',
                    price: '#200,946',
                    contact:  +2349137147588 ,
                    address: 'Plot 3, 4, G.R.A, 7 & 8 El shaddai Rd, Alagbaka, Akure 340106' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipMypW0ero8dH2ts7AzAbEvHfKKI6xtcYznBDIpI=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPvo9RjHSh1fzYYu8d2yn4kPfxsizWcXon87fzc=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Imperial Boni Hotels and Resorts',
                    rating: '4.3 stars',
                    price: '#132,382',
                    contact: +2349059659790 ,
                    address: 'Block 39, Plot 557 Ikere Street, Ijapo Estate, Akure 340110',
                    image1: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhH3KIyTWQs6lg_Z-2QM4Jugw59onNZGo46Zrz2MxC52fBn88OJFYuhjVsNJdUtgaaNrZQXQ-FSbLoOJwFcMvvI371MhvfOlDp33OMqka6T3MJSoaiSj-rd0_MQJVUqzQoE6qSygOfQkMG2soxeOvEeunVepHuV0s3Ra_rfh3G2lWRJGb9N1OCi2=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhHhjHRCi54vXx8ggw-tHjraNYskTKDyFcAeU0yr8MFqaP2arDVfXpVwmgqR47TUssoZF5KGQH4edWnzC3Xhzs0sPCU18wcThSOzbdE4QedlRyVU_pG-wOhMIc03swGa5TKpXZ5uPdDxBuGsAtlcSlAQhOeJTbqsV9G_DuJoXOu6IZfiUzBz_Tdv=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Heritage Continental Hotel',
                    rating: '4.4 stars',
                    price: '#58,850',
                    contact: +2349060003144 ,
                    address: 'No 40 HENRY FAJEMIROKUN STREET, Akure 340110' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipOUIOfrZT_V5lh1BFNaZptqzSkwojAcUkklHvi8=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipOKYia739CkDP3qfmvJgK8xvYVeo3qVkt88hn_a=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 29,
            state : 'osun',
            hotels : [
                {
                    name: 'LAIM Hotel Osogbo',
                    rating: '4.4 stars',
                    price: '#73,500',
                    contact:  +2349069491929 ,
                    address: 'Plot B4 & B5 ,Block 11,Rt. Hon Lasun Yussuff Crescent,Oroki Industrial Layout, Ring Rd, Okinni' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPjCGt3RXuUGx03HYtxbfOP8OrfgjXCCsyyeK1-=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipNT2iETF0T76aFVC0rkVvMr760vovxrb2z9y-uh=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Western Sun International Hotel & Events Center',
                    rating: '4.0 stars',
                    price: '#26,473',
                    contact: +2347063138184 ,
                    address: 'Cottage-Aisu Rd, Ede 232101',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipONZIB0bSC7IYiSkImJnMxvaI39CXYP1SfK78lA=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipNLN7PBjMK5xlc0cr-iSn64oudDagVzU6vEqD5T=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Royal Continental Suites and Apartments',
                    rating: '4.1 stars',
                    price: '#23,625',
                    contact: 'Not found' ,
                    address: 'Offa New Road, Osogbo 230103' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNJWwO2MeMLF1wsl7RNYYIUoRB3qan5ZR28R27r=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipOeNwFEwJBpXHK4VBClTwECq4z8iH67EUcE4M2l=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 30,
            state : 'oyo',
            hotels : [
                {
                    name: 'Ilaji Resort',
                    rating: '4.4 stars',
                    price: '#70,491',
                    contact:  +2348122661511 ,
                    address: 'Ilaji Hotels and Sports Resort, 1, Oloyo Village Off Ona-Ara Local Government Secretariat, Akanran, Ibadan 112106' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipMYvzzTokf8TrO3LMRPmnkJApNSk7bBjKmeJe2-=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMviea-UPLQTh50Rh2q1rwsGf7bCIo0pPKYioxT=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'De Manchy hotels & suites',
                    rating: '4.6 stars',
                    price: '#47,070',
                    contact: +2348148717017 ,
                    address: '19 Oyegbami St, Ibadan 200263',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipMNxHO_RGjQ_KwzGs-US0LfZb2I40AsisvNNY6J=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipOJHbGqpSzYBYd8LIHgRZPKJKA_K_a23y9yyFee=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Supreme Continental Hotels & Resorts',
                    rating: '4.3 stars',
                    price: '#28,875',
                    contact: +2349155578002 ,
                    address: 'local government, Supreme Continental way, Off Oyo-Ibadan Expressway, Ilora, State. ZIP Code:, Ilora, Ilọra 211105' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipM-29beEUr4gDoHvcSFM1spI_UytaQS4k9AALBn=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMrLquZuIG2Kns-thFEY5JAmKE92gIJZVGcAset=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 31,
            state : 'plateau',
            hotels : [
                {
                    name: 'Golden Bide Suites',
                    rating: '4.4 stars',
                    price: '#197,374',
                    contact:  +2347059999974 ,
                    address: 'No. 8 Golden Bide Close, Opposite Plateau Radio Television Corporation Rayfield, Jos 930101' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipO807pn4wOB_A1cj7gm8Xj0O-96IPKG6CxWgoTc=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMm3dVQ9eWvKsjjnxCOjDiUnvRWEJpLrBggIHvS=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: "Luxury L'auberge",
                    rating: '4.5 stars',
                    price: '#197,374',
                    contact: +2348148717017 ,
                    address: 'House No 2, Road D, Da Chibi Rwang, Street, Off Atiku Abubakar road Rayfield RWX4+G7G Jos, Nigeria Rayfield, Lane, Jos 930103',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipMh_p4z_3oZ7XS6XZP7-BQGMj8qaiH6BO5SK3nJ=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipO2jJfT72BCXF0PUt432QgVnPc76MEsVgevIxZ-=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Valada Hotel and Resorts Ltd',
                    rating: '4.4 stars',
                    price: '#31,075',
                    contact: +2347040004155 ,
                    address: '6 Sylvester Dabo Close, Apollo Cres, South, Jos' ,
                    image1: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhGrgiOKVbGt4hnRFKuqUwIybeTsgFybOPA6hnYnNFvuMMl8nFoBwPZS7Buutnj2u3WWlefhetUDHU2DfCEYpxnxqWQVTpITBFx19YAFnNxeFlQZXnLBGmdP8rLUtuPhlG3xwqV43hAI_YG8DUQp4GCg112sbTRUVU73FI1C5Cb7QUIZ50qsPRk=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipN4VO602YJ0mMJ30X1-OC_zv5889bY5l48WZYmd=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 32,
            state : 'rivers',
            hotels : [
                {
                    name: 'Genesis Hotels Port Harcourt',
                    rating: '4.2 stars',
                    price: '#312,039',
                    contact:  +2348050499247 ,
                    address: 'PHASE 2, 7 BROOKSTONE CLOSE, Professor Abowei Street, off PROF, New GRA, Port Harcourt 500001' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipO-zyIKTbu_xercTALmHDSWezrdUmE6_0QPxKdN=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipNZzCWnIsH7V9GIBbLxZcblYYAG87AkjH8wKxnI=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Novotel Port Harcourt',
                    rating: '4.2 stars',
                    price: '#110,250',
                    contact: +2347035258639 ,
                    address: '3 Stadium Rd, Rumuomasi, Port Harcourt 500102',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipOeXygeOQlcWYxzf3D3cvl8hrZiXFgqVO0Exa0g=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipN1PTKQpyVp4xCcHF_7UV6x9irFkJZ7ZAvlK1mu=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Charleson Luxury Hotel',
                    rating: '4.4 stars',
                    price: '#64,800',
                    contact: +2349133333387 ,
                    address: '3-7 Charleson Drive, Stemco Junction, Igwuruta, Ali off Airport Road, Port Harcourt 500272' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipO241f75Lvryd719bItnT8YlqznW7-Q8UClBqeQ=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipOCIl586FX9S0jqOvC9ahNWh34r1rH_KUyEmsQI=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 33,
            state : 'sokoto',
            hotels : [
                {
                    name: 'Command Guest House Sokoto',
                    rating: '4.2 stars',
                    price: '#156,646',
                    contact:  +2348050499247 ,
                    address: 'Gusau Road, Wamako 852106' ,
                    image1: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhGcpqG1g_5xHEbCzZXmYhw23hNJJHHb6IViy5azvkGQPEXm6SF7dNa2uDjAlk7-NKIpSJIBZ4DUNXUJd305FKrWGyaFl4smHGg5m4kIwOODRUM99BAX3wnb9mlMT27tevpKocYmTZcfli-oPwGnq3WKi-bFAK3tvn9TLdRF9AeO-2zJhhJXBN4P2w=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPj97xku15qjhfGwNCyDCVok93tpg6q_EfKlUI3=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Dankani Guest Palace Hotel',
                    rating: '3.9 stars',
                    price: '#20,948',
                    contact: +2348066610844 ,
                    address: '1 Kalambaina Rd, opp. Dankani Guest Palas LTD, Mabera Mujaya, 840103',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipMjnbjm19-bfOglpSvr9PUPOc_H2tLWeUsMkPoB=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipN8_epThNLchR8JMzMEji-pVpsRgdSYvjmsAoa5=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Giginya Coral Hotel',
                    rating: '3.7 stars',
                    price: '#19,380',
                    contact: +2348166403721 ,
                    address: '26P8+V5X, Bye Pass, Sokoto 840103' ,
                    image1: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhEuIQ6YC2BlX5k0WBMqMOeJ2jE66JQLzBgywjV7c6o2_FmJuPSGG6W-u4y9qtOKE0GOT5NECQ6aDozxdFM6OnmPt7TEeH5_f8i8SFCOQ22XPkwtpejoBjdtrej-LtMXbymJmHFP1EGgZ9PSxeRKDXkM_3SOpxzzEUVkfppZnlP_4PEYeajQO1E=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipNzG2Ky-JVSJw6tZAw9fRBeH87zlXNJ-7mfSnVO=w287-h192-n-k-rw-no-v1'
                }
            ]
        },
        {
            id: 34,
            state : 'taraba',
            hotels : [
                {
                    name: 'Star Exclusive Hotel',
                    rating: '3.9 stars',
                    price: '#28,250',
                    contact:  +2348087626382 ,
                    address: 'Bali - Jalingo Rd, Bali 660213' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipPEMYb3sGdvrSCIMzvmDOGyTrDIK_pJWaCzdSp3=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipPbHOdltc4Hd9-V6FYBxOh0VbSh5Xig2sxa7Bko=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Fast Track Hotel',
                    rating: '4.0 stars',
                    price: '#16,950',
                    contact: +2349063968882 ,
                    address: 'Nyamu Sala Street, behind Muslim Council, Kuson',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNQ-v_-7XjUtP2tXC0moLrqwDUt30IfRyoghXja=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipM_zGDVqYvZqhjCZQ07dz1QpWmQzdJfeoHe3lae=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Diamond Classic International Hotel Ltd',
                    rating: '4.5 stars',
                    price: '#19,380',
                    contact: +441775843417 ,
                    address: 'Behind AUK Kibri Filling Station Hammaruwa Way., Jalingo 660241' ,
                    image1: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/213559157.jpg?k=dd9a18bc4d1240bb2209e9251017f34e222a3b7f5e515cd758484ef464f48564&o=',
                    image2: 'https://ak-d.tripcdn.com/images/1re4612000chjyn9234C6.png'
                }
            ]
        },
        {
            id: 35,
            state : 'yobe',
            hotels : [
                {
                    name: 'GAAT Hotel',
                    rating: '3.0 stars',
                    price: '#15,000',
                    contact:  +2348087626382 ,
                    address: 'Plot 57 Barewa Road G.R.A Behind Government House, Damaturu 620101' ,
                    image1: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/29/c0/79/filename-gaat-jpg-thumbnail0.jpg?w=800&h=-1&s=1',
                    image2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/6f/46/d1/photo3jpg.jpg?w=800&h=-1&s=1'
                },
                {
                    name: 'Summit Conference Center',
                    rating: '4.0 stars',
                    price: '#16,950',
                    contact: +2349063968882 ,
                    address: 'Plot 129 Barewa Road, Damaturu 620234 Nigeria',
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipNQ-v_-7XjUtP2tXC0moLrqwDUt30IfRyoghXja=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipM_zGDVqYvZqhjCZQ07dz1QpWmQzdJfeoHe3lae=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Zadiah hotel',
                    rating: '3.5 stars',
                    price: '#14,380',
                    contact: +2348148808800 ,
                    address: "Plot 157159 Gurjigurjiya Commission's Quarters Damaturu" ,
                    image1: 'https://images.timbu.com/hotels-ng/supplier_zadiah_hotel_740192_2_562x422.png',
                    image2: 'https://images.timbu.com/hotels-ng/supplier_zadiah_hotel_740192_4_562x422.png'
                }
            ]
        },
        {
            id: 36,
            state : 'zamfara',
            hotels : [
                {
                    name: 'Crystal Merit Suite and Apartments',
                    rating: '3.9 stars',
                    price: '#9,912',
                    contact:  +2349056754568 ,
                    address: 'No. 14 Olusegun Obasanjo Dr, Unguan Yerima, Gusau 632101' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipMkyV-CQzPy-JUyq2PKIrxSNyMB7WywTJgrfpkt=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipM5uXED8RHYtIs-JC0LZ-m1OB3nqwSAdITpw7oh=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Karma Guest Inn',
                    rating: '3.9 stars',
                    price: '#20,000',
                    contact: +2348148808800 ,
                    address: 'Gusau-Sokoto By Pass Gusau',
                    image1: 'https://images.timbu.com/hotels-ng/supplier_karma_guest_inn_119792_1_562x422.jpg',
                    image2: 'https://images.timbu.com/hotels-ng/supplier_karma_guest_inn_119792_2_562x422.jpg'
                },
                {
                    name: 'Zadiah hotel',
                    rating: '4.0 stars',
                    price: '#12,250',
                    contact: +2348148808800 ,
                    address: 'Along Sokoto Bypass Gusau' ,
                    image1: 'https://images.timbu.com/hotels-ng/supplier_city_king_hotel_829685_2_562x422.jpg',
                    image2: 'https://images.timbu.com/hotels-ng/supplier_city_king_hotel_829685_3_562x422.jpg'
                }
            ]
        },
        {
            id: 37,
            state : 'abuja',
            hotels : [
                {
                    name: 'Fraser Suites Abuja',
                    rating: '4.6 stars',
                    price: '#551,567',
                    contact:  +2348139888888 ,
                    address: '294 Leventis Close, Central Business District, Abuja 900103, Federal Capital Territory' ,
                    image1: 'https://lh3.googleusercontent.com/p/AF1QipODaKfwG3bygU4MxbBUdgbakys7gyRY3cGgoArH=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipMZfjlbqyjXi9whCoxvwmC8Z5plgFzSaGXB-iFx=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'Transcorp Hilton Abuja',
                    rating: '4.6 stars',
                    price: '#258,839',
                    contact: +2348039013000 ,
                    address: '1 Aguiyi Ironsi St, Maitama, Abuja 900001, Federal Capital Territory',
                    image1: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhFelX655ZiRQSMoWXBHCGO_tKmotLIZUeCt0259nFUmE4n1B8XTFq3bEu6kHvZuClUQiBhxcZ29TklSiX81101GnX0VlJh5iWHNEWBr3BxYglV_Ft8je8qu5LQq6cFrB2b6sLC5TeThs_qP9HQu7T6E3HgIP6It1JXmwp0l5F_2mMWnbN7yQvs=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/p/AF1QipOKofO1_1MZXi-t56KssmNr8h8qqR7c60zHvbEQ=w287-h192-n-k-rw-no-v1'
                },
                {
                    name: 'The Wells Carlton Hotel & Apartments',
                    rating: '4.6 stars',
                    price: '#110,000',
                    contact: +2349081879231 ,
                    address: '8 Gado Nasko St, Asokoro, Abuja 900110, Federal Capital Territory',
                    image1: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhFJQn4hlogL4Qv4MxJzzf7etlFpVDfuUSZXvvJPw5SDSLHeuRUDLshl_42HSV4H1obtZXGbu-LjA460P3QPV8IMv1KXbqA01VVuRBMoYlIKZwnXKsO3BO4kNx04hdg_-IzzhP2sO9d47bAPYmdm4JtV7vZqtSXxhgxYzm_OIuAxPKKHWagDCjMn=w287-h192-n-k-rw-no-v1',
                    image2: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhF2pMexQLqsMNGU_GAC9xdx5EeONN7dI-r2OKmOX9h0acZLYsHXiqgHRcPMLa7U8Ln6Np38HAttrTKDyBt5_JpTYzzma8Run91gk6-tFGf92Ud6CQwn5RAuMonIepP3hp4AGEzzUFqygbXyIaOTUL5NwJgP2sjxyWE7sd9IVk7BNNXYPUFNrXcl=w287-h192-n-k-rw-no-v1'
                }
            ]
        }
      ]

  return (
    <section className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Body options = {options} />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About />} />
        <Route path='/hotel/:id/:index' element={<FullCardContent options = {options} />} />
        <Route path='/*' element={<Missing />} />
      </Routes>
      <Footer/>
    </section>
  );
}

export default App;
