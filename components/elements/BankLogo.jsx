import Image from 'next/image';
import React from 'react';

function BankLogo() {
  return (
    <section className="">
      <Image
        alt="logo"
        width={30}
        height={30}
        src="/bankLogo/금융아이콘_SVG_우리.svg"
      ></Image>
    </section>
  );
}

export default BankLogo;
