"""initial_schema

Revision ID: 30067db38089
Revises: 
Create Date: 2026-06-19 20:06:19.394079

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

                                        
revision: str = '30067db38089'
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
                                                                 
    op.create_table('projects',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('slug', sa.String(length=255), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('detailed_description', sa.Text(), nullable=True),
    sa.Column('difficulty', sa.String(length=50), nullable=True),
    sa.Column('estimated_time', sa.String(length=100), nullable=True),
    sa.Column('innovation_score', sa.Integer(), nullable=True),
    sa.Column('features', sa.JSON(), nullable=True),
    sa.Column('suggested_stack', sa.JSON(), nullable=True),
    sa.Column('target_audience', sa.Text(), nullable=True),
    sa.Column('market_potential', sa.Text(), nullable=True),
    sa.Column('key_benefits', sa.JSON(), nullable=True),
    sa.Column('implementation_steps', sa.JSON(), nullable=True),
    sa.Column('theme', sa.String(length=255), nullable=True),
    sa.Column('design_style', sa.String(length=255), nullable=True),
    sa.Column('view_count', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_projects_id'), 'projects', ['id'], unique=False)
    op.create_index(op.f('ix_projects_slug'), 'projects', ['slug'], unique=True)
    op.alter_column('contacts', 'name',
               existing_type=sa.VARCHAR(length=255),
               type_=sa.String(length=100),
               existing_nullable=False)
    op.alter_column('contacts', 'created_at',
               existing_type=postgresql.TIMESTAMP(),
               type_=sa.DateTime(timezone=True),
               existing_nullable=True,
               existing_server_default=sa.text('CURRENT_TIMESTAMP'))
    op.create_index(op.f('ix_contacts_id'), 'contacts', ['id'], unique=False)
                                  


def downgrade() -> None:
    """Downgrade schema."""
                                                                 
    op.drop_index(op.f('ix_contacts_id'), table_name='contacts')
    op.alter_column('contacts', 'created_at',
               existing_type=sa.DateTime(timezone=True),
               type_=postgresql.TIMESTAMP(),
               existing_nullable=True,
               existing_server_default=sa.text('CURRENT_TIMESTAMP'))
    op.alter_column('contacts', 'name',
               existing_type=sa.String(length=100),
               type_=sa.VARCHAR(length=255),
               existing_nullable=False)
    op.drop_index(op.f('ix_projects_slug'), table_name='projects')
    op.drop_index(op.f('ix_projects_id'), table_name='projects')
    op.drop_table('projects')
                                  
