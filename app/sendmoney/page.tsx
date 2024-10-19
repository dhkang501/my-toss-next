import { error } from 'console';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BackButton from '@/components/elements/BackButton';

const sendmoney = async () => {
  return (
    <div className="m-2">
      <BackButton />
      <div className="text-2xl font-semibold my-4">어디로 돈을 보낼까요?</div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">계좌</TabsTrigger>
          <TabsTrigger value="password">연락처</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div>계좌번호 입력</div>
        </TabsContent>
        <TabsContent value="password">
          <div>핸드폰번호 입력</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default sendmoney;
