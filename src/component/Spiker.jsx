import React from 'react';

const speakers = [
    {
        name: 'Алексей Некрасов',
        description: 'Лидер направления Python в МТС, направляет архитектуру платформы для студентов Skillbox. Опыт работы — более 8 лет',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/9f59/0d76/03c51a85a891bb0c5f200701fd654017?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kjkv0BcQFaLxiu~8KeJ4qMjZPPcPxUrDRUrjAGR03dMlbxyts-7aefFqNjjHLWGECVMyYpUChY8UpuqdyAn9UMqTxFQn6AbO9MhMoimOiwhkyGIzNu741BLJNQvMUc2jFvIYYSEJQiwwUs4g210YQQnwJ2tvJFcRg4xNSeuLs6C1g9~z8-Kjc3GgLtNbkMFiOu3m-a~fpR0NsoEGFdfCvweM6Fwvxom-Z6Ru9qbDngUjNRmoPhKt2q-Pr9htjm7trTFfx5lgB8Nz-f6BsnpmwSktrIwbmRGwoNFxNlD-0EyyVEa0qe60qDbdxOxoYwkKRtGozmR-D9Tnbh3MQZnq6A__'
    },
    {
        name: 'Никита Нестеренко',
        description: 'Руководитель проекта и главный инженер по разработке курсов на платформе Skillbox. Опыт работы — более 5 лет',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/c3a1/d18c/a497af1a5bc43d53c2f399b2d9d5cc15?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DheI-spxRFTtuhMiLzPiXDogmXxoItXsH9MrRM6F5HTihgu-qDdib6hw4n6SL70ij4HCYzAUudezDcw0NmhJynH82PEcLAoD~TAAFV3fgFB31aBDTf1bUJfPd8~CorDBCmQvyfjL0bRZf62IjBdmV5Gey65lvHAvLswGWNxUtbWs8KEFyYOF6nBXorD7k4UTfmflW0hBY2FxqsBI8Ao8bshTCnmQdPg0LI7DSizwp8oxsakJfx959lmeTuVYYtpSxdmN64W41UziXA5jnoGzyJkGuTh72R40iSi22ukFBYgmomasIt37l7sVzgSyEqCJ1wTgDPti7VwiNAfq23usgQ__'
    },
    {
        name: 'Алексей Половинкин',
        description: 'Python-темлид компании AGIMA. Опыт работы — более 7 лет',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/302a/7f95/96c55dbbb2c94994f59ac00ceb851a0d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fGirZmDPE7m2qO6AXYBbRvtIg1SQffT6O5PALx~7XeDJVo48SF-n8ssa-T7tW62WakeHrGdaUmAyI8~3mYohQvLX1LGqqgFF432~5h0U56kMa5VrblnNfqu~DOVqCmTOlfiBk99JU1~O8Pss1gUvS9FLujWuTKmpEBvOV3TZhZ3PWJagiikBt2J8AB7ZwB1n5UfozXHwNgWlfJpGndytrsDZHKsBp3J19EmwZxuTsrUszgrva-SALjCVLZfhrA2QGc5SqD8RDl8Aizm61ZydG~iDcOcVeuAos3bUy8HTRpVCtuT58~NYPsBKNuCPDj6-~8OSEzBFEmgcZSxogpwDeA__'
    },
    {
        name: 'Дмитрий Якин',
        description: 'Инженер по тестированию в компании Яндекс',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/0a0f/0822/2a1e0dcc97c82a2533c283e254285532?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3tc25XeSmOniIz6-4uYobGJCeHunwiGKFteKls7Qe4ODN97-rDfNuWk1~aCFW3YncnsnqUqQ98emmhLZV5-zgCOqET1y2vIGWmaA3YGvt2lWEjr9F~WgooHiAqkG8h2oLfK0Hb5A0Mhc4Nkay~wMxl4DqXjLcgwnLQ0vjRX2FPBQmb42pid-UCN-nhPnDA4IFANUF5OO4lQCm1FTTmUMZ9zf-jHnlDUdwI3bj6CtpTeNSccfCeEGbeBRZbkFb3rJaXhP5gIq6TLZ3j9F26tqAdoyynXyRtAtiyZFVFdsP~uhHzPeXsBvNklbjdQ~2cdvjzYdsBrImcgwvAyi4V9~w__'
    },
    {
        name: 'Тимофей Тунов',
        description: 'Системный архитектор в СберМаркетинг. 10 лет занимается веб-разработкой',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/7b0f/9daa/9272640bb39365aff037039b1a4774c7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YMOiOZLQAk155WtfHca4cBiB1245OJKtCuPRJRqIOFaGBepDk92VhWk1L8epYw9APx7vpL9zFK1mHQ5VphQUi22ML0fnAg~2UONDzluLWFJuv7ksqaDCOELu9aEKY00O7XMTTG7I0IDERX8JKH6QQYv8hlnpuv3lk6c-3xnZn9q2xotB25a4KFidw6CHyZJUFqMPogmOClhgV-7dLxKF2FeqlQpNRU-suBGwRdW05OJJp4tmRhTTiq66yGe5siGlFMjfCv7Tubgi2sGZagGarPJj~h4qdRcTuTJ9jGk7sNWMyTv7fysep8bJYNGakUpDXzYm06g1MM1RtW9CJE76Ag__'
    },
    {
        name: 'Данил Пилипенко',
        description: 'Java-программист с опытом работы 18 лет, директор института программирования в Skillbox',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/4b23/809b/272e1c8ad77b37aefd079067e769bbe6?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HU-OV2lowmGHrXErB~W4mTKTlpPXrTh0hJyH3-aUR0Yqq7DFBFbGYIqMz5BNmyf4gER1AG7Z~dQ8Layz2PiG8tZ~5aIIoVGWHvCikRspYzi4HWAIM5MDEljxl8F4Nh6z6pHztMUuLf~PDjAhYAO3DyKlllk3eh3GgnJNDC6RsZiAEeCVvjYRqXPW1DXc35LtGbzH-Cpo9g5eJNeRV0Z7Ukv~L---QeXLKyrDNsv~8RXb7ipCgKXkzZjS4rK2MJZOAwmF5nA3EO3Scvld10LSLjfWxfYOlZHRTQRAIocjZ2dt88IPJoMSlX746~niD7iAkZ9-yVKlxiL6B3tutdVhag__'
    },
    {
        name: 'Михаил Овчинников',
        description: 'Разработчик специальных систем в компании Сбертех и лектор по Golang в Skillbox. Опыт работы — 8 лет',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/b618/cc8b/b14325887bf02e9b3bf6dadc3bb6bd54?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sw6JG-uSNCP-9VwFFzyjMz~C0~X3bQGU8EP~d1cGeUY8KUhqdkAqfTQMivJUe0U6roc94wzapJMMsrg0bPJQ15vFcAB0r2UDzyENjDHboB696q26ucDkAtX2-LT6ZtqKAD5n-CJiSCfiw9fRk2-EV5gqUm65u8VSMCs6MEzhNrZa4112Oj~pT9u6zh4JvwSQGpr1p6PyKW6ip7AWy3izN~dD9a-P4-PwVuHFnQtHlsE8aBzQvD7zmWJnHYwRQwrk~6~AwN1wxQOqjHgJIxTfFF7TW9NkBW8vRMcVzmCtNthEW8lQ8fJqOGYi8GBUw2LS0zkqt9Hlrs-wba5xoONuJA__'
    },
    {
        name: 'Глеб Михеев',
        description: 'Технический директор Skillbox Holding и лектор по курсам. Опыт работы — более 10 лет',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/c38f/0d78/41747124c7574f01f82091a41075c221?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DalcavXONe~KTQKoDc6HnhCQ-vYUITJLaFzVyQYaDtQgybW7OLti3nF~lkz~hmK5mRqPz2NmqmKsS3c2LyNCA~w85xg5YtXkGteDPp9g4706dUpMQpzulFsOB2HGClIR-TCvY4pB0Ps~0msbMczDlzi3w8I7~Wliy3MLSGdmMX1oMf-Ao6C9HU2Pi2OM08MCspB~N8wJvbCBsAiEjBSshhT-P0W-yV9wQ1FwGg6k6xyvGVvX20ztYUkrCHL8ffO6L5txdU8YQCd9x5oxWpHSJX0OCiCpavAVzNfXLQY975e2aUoD4jB4HWwHC6p-GebHkHSukV73HI8VhyL51tXfwA__'
    },
    {
        name: 'Сергей Корниенко',
        description: 'Frontend Teamlead в Peqoud Design. Более 20 лет в разработке',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/da7a/3ab5/92795c236d6994b24484c6e7735e0f0c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WUSoG~MEnDq9PmZoP1zAwJ9jN8pMJBLbPw8YqoeFAHIQTRJqjPFoEVR4KeOdgPVcTTknQjORaWnCa3H657DRYYcauK9f3LOyo2y5cJOFMKpSRmq3kWbrQi91bZV2BxSQHpFTo3iu7eigH74pNJXaT7kmVKf2al8WIxbYF3YJwBJc3V92KhsL4LUxCiPlms1fynkxbVxJzCAaG9Ld5MPCdZpfvFlK~DJfn~RUngF~IUbA49z~l5wsedrK0Dq-yQ6yDjXz0XcLsqelUfMsOKvxz3oU1ZpmtdRxLad1pgUNqSR2xdys17sNBvJW5LV9qW-BUloeYaRD7ny8gM4S8GcaOw__'
    },
    {
        name: 'Игорь Борзунов',
        description: 'Frontend Tech Lead и разработчик',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/bc92/7e11/aa87f8e4497f63a46d32f3fd14faba6d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C7HGHFITUcO15bihPEhfb8GA1mTMCjhKuf0GEdfFM2eY6eQtEOrjiQUgfPLhBo6vgWG12bx13iV-8wyBGLNHLYw08wdE8eJ9EPq7lImiW12S~t8iLyElCogKccmwHISrWnbVeCXdEerBMAVCMQ--DWbEWf7UvcBdfEoo45GCVKg7w77q0ICICxNnwa0nb4CllNgo~QuwyKlShR8fN3z42hhoDD4TH3E5NnvWfqiRMUG~cO9uKijCXypdkXBG1OvZJ8ZL-VkMPYsKaxlTNQEVPNS2VWI3Hjxzv3byDJcpwnsK~AdDF37OlyB7CWSvEzCwJVD0O68j~jZhIUgZlQlqHw__'
    },
    {
        name: 'Алексей Авдеев',
        description: 'CTO стартапа лаборатории Мега. 10 лет в веб-разработке',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/dd37/ee8b/3017b62714acdb451bac9d9a181e9c1a?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JAXg7mAqZoTPBbGQ2-bKEj28gnV04bc0g7HFXoniK13SdHOQ6g5N-jjIFSorsEKdWewuMicTy1TlglCxv508xRHKHSadRuiLReI~zetD-Hredyc0iQGw0E0Fz0R3bAWSX7fvrFQpG0DzHvugQOzJMM3WqXIkjfM5qietcaoVEr7kxJfQ4AjO2FFYIEsv1HfoIfyL4X6efR-NRsd5BNL~Qj5RO~fpg8p7L4PFW~0VdUDur9ekse1yGrm6OilamxefbAI~r9oJwlmBmb1pbGcWEHuircqQxxC0Rm9obpF3g5nZW8447lf-Qz-8SOZg2k9PoeB50hURJG4wKXGUx6TyMw__'
    },
    {
        name: 'Александр Поздняков',
        description: 'Angular Developer в InSales. Опыт разработки — более 8 лет',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/2eb5/6c24/9af2917b757d08ebee233eae5975becc?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F1lJHjHMYD17qih29HrAxFTUDfXNto2KWNeivb7kqC2s20qPXq~KoDTywO9Dg1SoCpgke0A5AIquQmLlLDNdDWO2Jt4uf-gSDH0MqfznTJjC14Rg9At9ML8CD7IpDozlOXipJkfZ2OATxRXgOxh5p-jbPi5HBrmdsmajYJPVhPSPK71SwzvPVe5wzrHRVVRKeVtuppdYT2GFsD1AKHjS3JmC3UGaywTybU-P43EqEjqw-ws~kKnt4GggmPEHIJpb70URMZYxV~4jXPuNlHFiadIzIaP1Rj8DklGJqw0vRkVrd-puEkFegmix9dtF088SGpPsygvTZ~tjup-p3V7F5Q__'
    }
];

function SpeakersGrid() {
    return (
        <div className="max-w-6xl mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-6 text-center">Спикеры</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {speakers.map((speaker, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                        <img src={speaker.imageUrl} alt={speaker.name} className="w-24 h-24 rounded-full mb-4" />
                        <h3 className="text-lg font-semibold">{speaker.name}</h3>
                        <p className="text-gray-600 text-sm mt-2">{speaker.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SpeakersGrid;
