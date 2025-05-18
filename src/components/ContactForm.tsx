import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { Button } from './Button';

const Flex = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

const Input = styled.input`
  font-size: 16px;
  line-height: 16px;
  color: #090b0e;
  padding: 16px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  margin-top: 24px;
`;

const Select = styled.select`
  font-size: 16px;
  line-height: 16px;
  color: #090b0e;
  padding: 16px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  margin-top: 24px;
  width: 100%;
  background-color: white;
`;

const TextArea = styled.textarea`
  font-family: 'Figtree', sans-serif;
  font-size: 16px;
  line-height: 16px;
  color: #090b0e;
  padding: 16px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  margin-top: 24px;
  min-height: 120px;
  resize: vertical;
`;

const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 14px;
  margin-top: 4px;
  display: block;
`;

interface FormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  category: 'Subsurface' | 'Surface' | 'CCUS' | 'General';
  message: string;
}

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: data.fullName,
        company: data.company,
        from_email: data.email,
        phone: data.phone,
        category: data.category,
        message: data.message,
      };

      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY');

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <Flex>
          <FormGroup>
            <Input
              placeholder="Full Name"
              {...register('fullName', { required: 'Full name is required' })}
              type="text"
            />
            {errors.fullName && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Input
              placeholder="Company"
              {...register('company', { required: 'Company name is required' })}
              type="text"
            />
            {errors.company && <ErrorMessage>{errors.company.message}</ErrorMessage>}
          </FormGroup>
        </Flex>

        <Flex>
          <FormGroup>
            <Input
              placeholder="Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email format',
                },
              })}
              type="email"
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Input
              placeholder="Phone Number"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                  message: 'Invalid phone number format',
                },
              })}
              type="tel"
            />
            {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
          </FormGroup>
        </Flex>

        <FormGroup>
          <Select {...register('category', { required: 'Please select an inquiry category' })}>
            <option value="">Select Inquiry Category</option>
            <option value="Subsurface">Subsurface</option>
            <option value="Surface">Surface</option>
            <option value="CCUS">CCUS</option>
            <option value="General">General</option>
          </Select>
          {errors.category && <ErrorMessage>{errors.category.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <TextArea
            placeholder="Inquiry Details"
            {...register('message', { required: 'Please provide inquiry details' })}
          />
          {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
        </FormGroup>

        <Button
          variant="primary"
          className="mt-24"
          type="submit"
          isFullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
        </Button>

        {submitStatus === 'success' && (
          <div style={{ color: '#28a745', marginTop: '1rem' }}>Message sent successfully!</div>
        )}

        {submitStatus === 'error' && (
          <div style={{ color: '#dc3545', marginTop: '1rem' }}>
            Failed to send message. Please try again later.
          </div>
        )}
      </form>
    </div>
  );
};
