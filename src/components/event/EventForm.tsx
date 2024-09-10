import React from "react";
import {Button, DatePicker, Form, Input, Card} from "antd";
import {PlusOutlined, CalendarOutlined} from "@ant-design/icons";
import {Dayjs} from "dayjs";
import styles from "./EventForm.module.css";

interface EventFormProps {
  onSubmit: (event: {title: string; date: Dayjs}) => void;
  initialDate: Dayjs;
}

function EventForm({onSubmit, initialDate}: EventFormProps) {
  const [form] = Form.useForm();

  const handleSubmit = (values: {title: string; date: Dayjs}) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Card
      className={styles.formCard}
      title="새 일정 추가"
      extra={<CalendarOutlined />}>
      <Form
        form={form}
        onFinish={handleSubmit}
        initialValues={{date: initialDate}}
        layout="vertical"
        className={styles.form}>
        <Form.Item
          name="title"
          label="일정 제목"
          rules={[{required: true, message: "일정을 작성해 주세요!"}]}>
          <Input placeholder="일정 명" prefix={<CalendarOutlined />} />
        </Form.Item>
        <Form.Item
          name="date"
          label="날짜"
          rules={[{required: true, message: "날짜를 선택해 주세요!"}]}>
          <DatePicker className={styles.datePicker} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            icon={<PlusOutlined />}
            className={styles.submitButton}>
            일정 추가하기
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default EventForm;
